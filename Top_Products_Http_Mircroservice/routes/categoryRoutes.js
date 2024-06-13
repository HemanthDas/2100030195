const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get(
  "/categories/:categoryname/products",
  categoryController.getProductsByCategory
);

router.get(
  "/categories/:categoryname/products/:productid",
  categoryController.productController
);

module.exports = router;
