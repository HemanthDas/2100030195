const productService = require("../services/productServices");

const getProductsByCategory = async (req, res) => {
  try {
    const { categoryname } = req.params;
    const { n, sort } = req.query;
    const page = req.query.page || 1;

    const products = await productService.getTopProductsByCategory(
      categoryname,
      parseInt(n),
      parseInt(page),
      sort
    );
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const productController = async (req, res) => {
  try {
    const { categoryname, productid } = req.params;
    const product = await productService.getProductById(
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
