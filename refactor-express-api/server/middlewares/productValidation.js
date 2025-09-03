const ProductValidation = {
  validateProduct: (req, res, next) => {
    const { name, price, category, image, description } = req.body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return res.status(400).json({
        message: "Product name is required and must be a string",
      });
    }

    if (!price || typeof price !== "number" || price <= 0) {
      return res.status(400).json({
        message: "Price must be a positive number",
      });
    }

    if (!image || typeof image !== "string" || image.trim().length === 0) {
      return res.status(400).json({
        message: "Product image is required and must be a string",
      });
    }

    if (
      !description ||
      typeof description !== "string" ||
      description.trim().length === 0
    ) {
      return res.status(400).json({
        message: "Product description is required and must be a string",
      });
    }

    if (description.trim().length < 10) {
      return res.status(400).json({
        message: "Description must be at least 10 characters long",
      });
    }

    if (
      !category ||
      typeof category !== "string" ||
      category.trim().length === 0
    ) {
      return res.status(400).json({
        message: "Category is required and must be a string",
      });
    }

    next();
  },
};

export default ProductValidation;
