import ProductService from "../services/productService.js";

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const { keywords: name, category } = req.query;
      const products = await ProductService.getAllProducts(name, category);
      return res.json({
        data: products.map((item) => ({
          name: item.name,
          price: item.price,
          image: item.image,
          description: item.description,
          category: item.category,
        })),
      });
    } catch (error) {
      return res.status(500).json({ message: `${error}` });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await ProductService.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.json({
        data: {
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description,
          category: product.category,
        },
      });
    } catch (error) {
      return res.status(500).json({ message: `${error}` });
    }
  },

  createProduct: async (req, res) => {
    const { name, price, image, description, category } = req.body;
    try {
      const result = await ProductService.createProduct({
        name,
        price,
        image,
        description,
        category,
      });
      return res.status(201).json({
        message: `Product Id ${result.insertedId} has been created successfully`,
      });
    } catch (error) {
      return res.status(500).json({ message: `${error}` });
    }
  },

  updateProduct: async (req, res) => {
    const { name, price, image, description, category } = req.body;
    try {
      await ProductService.updateProduct(req.params.id, {
        name,
        price,
        image,
        description,
        category,
      });
      return res.json({
        message: `Product Id ${req.params.id} has been updated successfully`,
      });
    } catch (error) {
      return res.status(500).json({ message: `${error}` });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await ProductService.deleteProduct(req.params.id);
      return res.json({
        message: `Product Id ${req.params.id} has been deleted successfully`,
      });
    } catch (error) {
      return res.status(500).json({ message: `${error}` });
    }
  },
};

export default ProductController;
