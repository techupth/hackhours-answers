import express from "express";
import assignmentRouter from "./apps/assignments.js";
import validateAssignmentData from "./middleware/assignmentValidation.js";
import loggingMiddleware from "./middleware/loggingMiddleware.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(loggingMiddleware);
app.use("/assignments", assignmentRouter);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
