import express from "express";

const app = express();
const port = 4001;

app.use(express.json());

app.get("/profiles", (req, res) => {
  return res.json({
    data: {
      name: "john",
      age: 20,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
