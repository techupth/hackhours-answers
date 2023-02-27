import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

let products = [
  {
    id: 1,
    name: "Fond - Neutral",
    price: 160,
    image: "http://dummyimage.com/350x350.png/dddddd/000000",
    description: "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    id: 2,
    name: "Pepper - Cubanelle",
    price: 7624,
    image: "http://dummyimage.com/350x350.png/cc0000/ffffff",
    description: "Nulla facilisi.",
  },
];

const app = express();
const port = 4001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.json({
    data: products,
  });
});

app.post("/products", (req, res) => {
  products.push({
    id: products[products.length - 1].id + 1,
    ...req.body,
  });
  res.json({
    message: "Product has been created.",
  });
});

app.put("/products/:id", (req, res) => {
  const updatedProduct = req.body;
  const productId = +req.params.id;

  const hasFound = products.find((product) => product.id === productId);

  if (!hasFound) {
    res.status(404).json({
      message: `Product ${productId} not found`,
    });
  }

  const productIndex = products.findIndex((post) => {
    return post.id === +productId;
  });

  products[productIndex] = {
    id: productId,
    ...updatedProduct,
  };

  res.json({
    message: `Product ${productId} has been updated.`,
  });
});

app.delete("/products/:id", (req, res) => {
  const productId = +req.params.id;

  const hasFound = products.find((product) => product.id === productId);

  if (!hasFound) {
    res.status(404).json({
      message: `Product ${productId} not found`,
    });
  }

  products = products.filter((product) => {
    return productId !== product.id;
  });

  res.json({
    message: `Product ${productId} has been deleted.`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
