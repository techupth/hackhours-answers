import { Router } from "express";
import ProductController from "../controllers/productController.js";
import ProductValidation from "../middlewares/productValidation.js";

const ProductRoute = {
  createRouter: () => {
    const productRouter = Router();

    productRouter.get("/", ProductController.getAllProducts);
    productRouter.get("/:id", ProductController.getProductById);
    productRouter.post(
      "/",
      ProductValidation.validateProduct,
      ProductController.createProduct
    );
    productRouter.put(
      "/:id",
      ProductValidation.validateProduct,
      ProductController.updateProduct
    );
    productRouter.delete("/:id", ProductController.deleteProduct);

    return productRouter;
  },
};

export default ProductRoute;
