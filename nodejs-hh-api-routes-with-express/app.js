// Start coding here
import express from "express";
import { assignments } from "./data/assignments.js";
import { comments } from "./data/comments.js";

let assignmentMockDatabase = [...assignments];
let commentsMockDatabase = [...comments];

const app = express();
const port = 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ระบบสามารถที่จะดูรายการของ Assignment ทั้งหมดได้
app.get("/assignments", (req, res) => {
  // Validation ในการตรวจสอบว่าถ้า Limit > 10 จะ Return response ว่าไม่ให้ดูข้อมูลกลับไปทันที
  if (req.query.limit > 10) {
    return res.json({
      message: "Invalid request,limit must not exceeds 10 assignments",
    });
  }

  const assignmentResult = assignmentMockDatabase.slice(0, req.query.limit);

  return res.json({
    data: assignmentResult,
  });
});

// ระบบสามารถที่จะดูข้อมูลของ Assignment แต่ละอันได้ด้วย Id
app.get("/assignments/:assignmentId", (req, res) => {
  const assignmentIdFromClient = Number(req.params.assignmentId);

  // Filter ข้อมูลจาก Mock Database
  const newAssignment = assignments.filter((item) => {
    return item.id === assignmentIdFromClient;
  });

  return res.json({
    data: newAssignment[0],
  });
});

// ระบบสามารถที่จะสร้าง Assignment ได้
app.post("/assignments", (req, res) => {
  let assignmentDataFromClient;
  let newAssignmentId;

  if (!assignmentMockDatabase.length) {
    // ถ้าใน Mock Database ไม่มีข้อมูลอยู่เลย จะกำหนด newAssignmentId เป็น 1
    newAssignmentId = 1;
  } else {
    // ถ้าใน Mock Database มีข้อมูลอยู่แล้วจะกำหนด newAssignmentId เป็น Id ของ Assignment สุดท้ายเพิ่มขึ้น 1
    newAssignmentId =
      assignmentMockDatabase[assignmentMockDatabase.length - 1].id + 1;
  }

  // Assign ตัว Key id เข้าไปใน assignmentDataFromClient
  assignmentDataFromClient = {
    id: newAssignmentId,
    ...req.body,
  };

  // เพิ่มข้อมูลลงไปใน Mock Database
  assignmentMockDatabase.push(assignmentDataFromClient);

  return res.json({
    message: "New assignment has been created successfully",
  });
});

// ระบบสามารถที่จะลบ Assignment ได้
app.delete("/assignments/:assignmentId", (req, res) => {
  const assignmentIdFromClient = Number(req.params.assignmentId);

  // หาข้อมูลใน Mock Database ก่อนกว่ามีไหม
  const hasFound = assignmentMockDatabase.find((item) => {
    return item.id === assignmentIdFromClient;
  });

  // ถ้าไม่มีก็ให้ Return error response กลับไปให้ Client
  if (!hasFound) {
    return res.json({
      message: "No assignment to delete",
    });
  }

  // กรองเอา Assignment ที่จะลบออกไปจาก Mock Database
  const newAssignments = assignmentMockDatabase.filter((item) => {
    return item.id !== assignmentIdFromClient;
  });

  assignmentMockDatabase = newAssignments;

  return res.json({
    message: `Assignment Id : ${assignmentIdFromClient}  has been deleted successfully`,
  });
});

//ระบบสามารถที่จะแก้ไข Assignment ได้
app.put("/assignments/:assignmentId", (req, res) => {
  const assignmentIdFromClient = Number(req.params.assignmentId);

  const updateAssignmentData = {
    ...req.body,
  };

  const hasFound = assignmentMockDatabase.find((item) => {
    return item.id === assignmentIdFromClient;
  });

  if (!hasFound) {
    return res.json({
      message: "No assignment to update",
    });
  }

  // หา Index ของข้อมูลใน Mock Database เพื่อที่จะเอามาใช้ Update ข้อมูล
  const assignmentIndex = assignmentMockDatabase.findIndex((item) => {
    return item.id === assignmentIdFromClient;
  });

  assignmentMockDatabase[assignmentIndex] = {
    id: assignmentIdFromClient,
    ...updateAssignmentData,
  };

  return res.json({
    message: `Assignment Id : ${assignmentIdFromClient}  has been updated successfully`,
  });
});

// ระบบสามารถที่จะดู Comment ทั้งหมดของ Assignment นั้นๆ ได้
app.get("/assignments/:assignmentId/comments", (req, res) => {
  const assignmentIdFromClient = Number(req.params.assignmentId);

  const assignmentComments = commentsMockDatabase.filter(
    (item) => item.assignmentId == assignmentIdFromClient
  );

  if (!assignmentComments.length) {
    return res.json({
      message: `No comments available on Assignment Id : ${assignmentIdFromClient}`,
    });
  }

  return res.json({
    data: assignmentComments,
  });
});

// ระบบสามารถที่จะเพิ่ม Comment ลงไปใน Assignment ได้
app.post("/assignments/:assignmentId/comments", (req, res) => {
  const assignmentIdFromClient = Number(req.params.assignmentId);

  // สร้าง id ใหม่ให้กับ comment
  const commentData = {
    id: commentsMockDatabase[commentsMockDatabase.length - 1].id + 1,
    ...req.body,
  };

  // Validate ก่อนว่ามี Assignment ให้เพิ่ม Comment หรือไม่
  const hasAssignment = assignmentMockDatabase.find((item) => {
    return item.id === assignmentIdFromClient;
  });

  // ถ้าไม่ก็ให้ Return error response กลับไปหา Client
  if (!hasAssignment) {
    return res.json({
      message: "No assignment to add comments",
    });
  }

  // เพิ่ม commentData ลงใน Mock database
  commentsMockDatabase.push(commentData);

  return res.json({
    message: `New comment of assignment id ${assignmentIdFromClient} has been created successfully`,
  });
});

// ส่วนที่ Start Server
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
