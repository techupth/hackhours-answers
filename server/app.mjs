import express from "express";

const app = express();
const port = 4001;

app.use(express.json());

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.post("/assignments", async (req, res) => {
  // ลอจิกในการเก็บข้อมูลของโพสต์ลงในฐานข้อมูล

  // 1) Access ข้อมูลใน Body จาก Request ด้วย req.body
  const newAssignment = {
    ...req.body,
    created_at: new Date(),
    updated_at: new Date(),
    published_at: new Date(),
  };

  // 2) เขียน Query เพื่อ Insert ข้อมูลโพสต์ ด้วย Connection Pool
  try {
    await connectionPool.query(
      `insert into assignments (user_id, title, content, category, length, created_at, updated_at, published_at, status)
      values ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        1, // นี่คือ user_id ที่ถูกจำลองขึ้นมา เนื่องจากเรายังไม่มีระบบ Authentication ในส่วน Back End
        newAssignment.title,
        newAssignment.content,
        newAssignment.category,
        newAssignment.length,
        newAssignment.created_at,
        newAssignment.updated_at,
        newAssignment.published_at,
        newAssignment.status,
      ]
    );
  } catch {
    return res.status(500).json({
      message: "Server could not create assignment because database connection",
    });
  }

  // 3) Return ตัว Response กลับไปหา Client ว่าสร้างสำเร็จ
  return res.status(201).json({ message: "Created assignment sucessfully" });
});

app.get("/assignments", async (req, res) => {
  // ลอจิกในอ่านข้อมูลโพสต์ทั้งหมดในระบบ
  // 1) เขียน Query เพื่ออ่านข้อมูลโพสต์ ด้วย Connection Pool
  let results;

  try {
    results = await connectionPool.query(`select * from assignments`);
  } catch {
    return res.status(500).json({
      message: "Server could not read assignment because database issue",
    });
  }

  // 2) Return ตัว Response กลับไปหา Client
  return res.status(200).json({
    data: results.rows,
  });
});

app.get("/assignments/:assignmentId", async (req, res) => {
  // ลอจิกในอ่านข้อมูลโพสต์ด้วย Id ในระบบ
  // 1) Access ตัว Endpoint Parameter ด้วย req.params
  const assignmentIdFromClient = req.params.assignmentId;

  // 2) เขียน Query เพื่ออ่านข้อมูลโพสต์ ด้วย Connection Pool
  const results = await connectionPool.query(
    `
		select * from assignments where assignment_id=$1
	`,
    [assignmentIdFromClient]
  );

  // เพิ่ม Conditional logic ว่าถ้าข้อมูลที่ได้กลับมาจากฐานข้อมูลเป็นค่า false (null / undefined)
  // ก็ให้ Return response ด้วย status code 404
  // พร้อมกับข้อความว่า "Server could not find a requested assignment (assignment id: x)"
  if (!results.rows[0]) {
    return res.status(404).json({
      message: `Server could not find a requested assignment (assignment id: ${assignmentIdFromClient})`,
    });
  }

  // 3) Return ตัว Response กลับไปหา Client
  return res.status(200).json({
    data: results.rows[0],
  });
});

app.put("/assignments/:assignmentId", async (req, res) => {
  // ลอจิกในการแก้ไขข้อมูลโพสต์ด้วย Id ในระบบ

  // 1) Access ตัว Endpoint Parameter ด้วย req.params
  // และข้อมูลโพสต์ที่ Client ส่งมาแก้ไขจาก Body ของ Request
  const assignmentIdFromClient = req.params.assignmentId;
  const updatedAssignment = { ...req.body, updated_at: new Date() };

  // 2) เขียน Query เพื่อแก้ไขข้อมูลโพสต์ ด้วย Connection Pool
  await connectionPool.query(
    `
      update assignments
      set title = $2,
          content = $3,
          category = $4,
          length = $5,
          status = $6,
          updated_at = $7
      where assignment_id = $1
    `,
    [
      assignmentIdFromClient,
      updatedAssignment.title,
      updatedAssignment.content,
      updatedAssignment.category,
      updatedAssignment.length,
      updatedAssignment.status,
      updatedAssignment.updated_at,
    ]
  );

  // 3) Return ตัว Response กลับไปหา Client
  return res.status(200).json({
    message: "Updated assignment sucessfully",
  });
});

app.delete("/assignments/:assignmentId", async (req, res) => {
  // ลอจิกในการลบข้อมูลโพสต์ด้วย Id ในระบบ
  // 1) Access ตัว Endpoint Parameter ด้วย req.params
  const assignmentIdFromClient = req.params.assignmentId;

  // 2) เขียน Query เพื่อลบข้อมูลโพสต์ ด้วย Connection Pool
  await connectionPool.query(
    `delete from assignments
	   where assignmentId = $1`,
    [assignmentIdFromClient]
  );

  // 3) Return ตัว Response กลับไปหา Client
  return res.status(200).json({
    message: "Delete assignment sucessfully",
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
