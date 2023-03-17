import { Router } from "express";

const accountRouter = Router();

accountRouter.get("/", function (req, res) {
  res.send("View all accounts");
});

accountRouter.get("/:id", function (req, res) {
  res.send("View an account by id");
});

accountRouter.post("/", function (req, res) {
  res.send("Create an account");
});

accountRouter.put("/:id", function (req, res) {
  res.send("Update an account by id");
});

accountRouter.delete("/:id", function (req, res) {
  res.send("Delete an account by id");
});

export default accountRouter;
