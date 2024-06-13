const productService = require("../services/productServices");

const getProductsByCategory = async (req, res) => {
  try {
    const Bearer = req.headers.authorization;
    const { categoryname } = req.params;
    const { n } = req.query;
    const sort = req.query.sort || { by: "price", order: "asc" };
    const page = req.query.page || 1;
    const products = await productService.getTopProductsByCategory(
      Bearer,
      categoryname,
      parseInt(n),
      parseInt(page),
      sort
    );
    if (products instanceof Error)
      return res.status(500).json({ message: products.message });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const productController = async (req, res) => {
  try {
    const { categoryname, productid } = req.params;
    const Bearer = req.headers.authorization;
    const product = await productService.getProductById(
      Bearer,
      categoryname,
      productid
    );
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getProductsByCategory,
  productController,
};
