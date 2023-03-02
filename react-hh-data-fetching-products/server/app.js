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
  {
    id: 3,
    name: "Cleaner - Pine Sol",
    price: 7457,
    image: "http://dummyimage.com/350x350.png/cc0000/ffffff",
    description: "Maecenas rhoncus aliquam lacus.",
  },
  {
    id: 4,
    name: "Wakami Seaweed",
    price: 4824,
    image: "http://dummyimage.com/350x350.png/ff4444/ffffff",
    description: "In hac habitasse platea dictumst.",
  },
  {
    id: 5,
    name: "Dried Figs",
    price: 1112,
    image: "http://dummyimage.com/350x350.png/5fa2dd/ffffff",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 6,
    name: "Kohlrabi",
    price: 4649,
    image: "http://dummyimage.com/350x350.png/5fa2dd/ffffff",
    description: "Praesent blandit.",
  },
  {
    id: 7,
    name: "Kippers - Smoked",
    price: 3633,
    image: "http://dummyimage.com/350x350.png/dddddd/000000",
    description:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
  },
  {
    id: 8,
    name: "Wine - White, Ej Gallo",
    price: 8004,
    image: "http://dummyimage.com/350x350.png/ff4444/ffffff",
    description:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    id: 9,
    name: "The Pop Shoppe - Grape",
    price: 2646,
    image: "http://dummyimage.com/350x350.png/ff4444/ffffff",
    description: "Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    id: 10,
    name: "Currants",
    price: 9419,
    image: "http://dummyimage.com/350x350.png/5fa2dd/ffffff",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
  },
  {
    id: 11,
    name: "Veal - Liver",
    price: 1295,
    image: "http://dummyimage.com/350x350.png/dddddd/000000",
    description:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
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
