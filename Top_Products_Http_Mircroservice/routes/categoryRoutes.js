const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/:categoryname/products", categoryController.getProductsByCategory);

router.get(
  "/:categoryname/products/:productid",
  categoryController.productController
);

module.exports = router;
