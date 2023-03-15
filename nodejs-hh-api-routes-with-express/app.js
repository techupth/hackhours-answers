// Start coding here
import express from "express";
import { assignments } from "./data/assignments.js";
import { comments } from "./data/comments.js";

const app = express();
const port = 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ระบบสามารถที่จะดูรายการของ Assignment ทั้งหมดได้
app.get("/assignments", (req, res) => {
  if (req.query.limit > 10) {
    return res.json({
      message: "Invalid request,limit must not exceeds 10 assignments",
    });
  }
  const newAssignments = assignments.slice(0, req.query.limit);

  return res.json({
    message: "Complete Fetching assignments",
    data: newAssignments,
  });
});

// ระบบสามารถที่จะดูข้อมูลของ Assignment แต่ละอันได้ด้วย Id
app.get("/assignments/:assignmentsId", (req, res) => {
  const eachAssignment = assignments.filter((item) => {
    return item.id === Number(req.params.assignmentsId);
  });
  return res.json({
    message: "Complete fetching assignments",
    data: eachAssignment[0],
  });
});

// ระบบสามารถที่จะสร้าง Assignment ได้
app.post("/assignments", (req, res) => {
  assignments.push(req.body);

  return res.json({
    message: "New assignment has been created successfully",
    data: assignments,
  });
});

// ระบบสามารถที่จะลบ Assignment ได้
app.delete("/assignments/:assignmentsId/", (req, res) => {
  if (req.params.assignmentsId > assignments.length) {
    return res.json({
      message: "Cannot delete! No data available!!",
    });
  } else {
    const allAssignment = assignments.filter((item) => {
      return item.id !== Number(req.params.assignmentsId);
    });
  }

  return res.json({
    message: `Assignment Id : ${req.params.assignmentsId}  has been deleted successfully`,
  });
});

//ระบบสามารถที่จะแก้ไข Assignment ได้
app.put("/assignments/:assignmentsId/", (req, res) => {
  if (req.params.assignmentsId > assignments.length) {
    return res.json({
      message: "Cannot update, No data available!",
    });
  } else {
    const allAssignment = assignments.map((item) => {
      if (Number(req.params.assignmentsId) === item.id) {
        item = req.body;
      }
      return item;
    });
    return res.json({
      message: `Assignment Id : ${req.params.assignmentsId}  has been updated successfully`,
      data: allAssignment,
    });
  }
});

// ระบบสามารถที่จะดู Comment ทั้งหมดของ Assignment นั้นๆ ได้
app.get("/assignments/:assignmentsId/comments", (req, res) => {
  const commentAvailable = comments.filter(
    (item) => item.assignmentId == req.params.assignmentsId
  );
  if (commentAvailable.length === 0) {
    return res.json({
      message: `No comments available! on Assignment Id : ${req.params.assignmentsId}`,
    });
  } else {
    return res.json({
      message: "Complete fetching assignments",
      data: commentAvailable,
    });
  }
});

app.post("/assignments/:assignmentsId/comments", (req, res) => {
  comments.push(req.body);
  return res.json({
    message: "New comment has been created successfully",
    data: comments,
  });
});

// Port
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
