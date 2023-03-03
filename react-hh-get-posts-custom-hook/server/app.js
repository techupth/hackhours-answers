import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

let posts = [
  {
    id: 1,
    title: "Paper Clips",
    content:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    likes: 61,
  },
  {
    id: 2,
    title: "Born to Kill",
    content:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    likes: 46,
  },
];

const app = express();

const port = 4000;

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts", (req, res) => {
  return res.json({
    data: posts,
  });
});

app.get("/posts/:id", (req, res) => {
  const postId = +req.params.id;
  const hasFound = posts.find((post) => post.id === postId);

  if (!hasFound) {
    return res.status(404).json({
      message: `Post ${postId} not found`,
    });
  }

  const post = posts.filter((post) => post.id === postId);

  return res.json({
    data: post[0],
  });
});

app.post("/posts", (req, res) => {
  posts.push({
    id: posts[posts.length - 1].id + 1,
    ...req.body,
  });

  return res.json({
    message: "Post has been created.",
  });
});

app.put("/posts/:id", (req, res) => {
  const updatedPost = req.body;
  const postId = +req.params.id;
  const hasFound = posts.find((post) => post.id === postId);

  if (!hasFound) {
    return res.status(404).json({
      message: `Post ${postId} not found`,
    });
  }

  const postIndex = posts.findIndex((post) => {
    return post.id === +postId;
  });

  posts[postIndex] = { id: postId, ...updatedPost };

  return res.json({
    message: `Post ${postId} has been updated.`,
  });
});

app.delete("/posts/:id", (req, res) => {
  const postId = +req.params.id;
  const hasFound = posts.find((post) => post.id === postId);

  if (!hasFound) {
    return res.status(404).json({
      message: `Post ${postId} not found`,
    });
  }

  posts = posts.filter((post) => {
    return postId !== post.id;
  });

  return res.json({
    message: `Post ${postId} has been deleted.`,
  });
});

app.get("*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
