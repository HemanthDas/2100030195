const getProduct = require("../utils/fetchProduct");
const productSorter = require("../utils/productSorter");
async function getTopProductsByCategory(Bearer, categoryName, n, page, sort) {
  try {
    const products = await getProduct(Bearer, n, categoryName, page);
    if (products instanceof Error) return Error(products.message);
    const sortedProducts = productSorter(products, sort.by, sort.order);
    const startIndex = (page - 1) * n;
    const endIndex = startIndex + n;
    return sortedProducts.slice(startIndex, endIndex);
  } catch (error) {
    console.error("Error fetching top products by category:", error);
    throw error;
  }
}

async function getProductById(Bearer, categoryName, productId) {
  try {
    const products = await getProduct(Bearer, 10, categoryName);
    if (products instanceof Error) return Error(products.message);
    return products.find((product) => product.id === parseInt(productId));
  } catch (error) {
    console.error("Error fetching product by id:", error);
    throw error;
  }
}
module.exports = {
  getTopProductsByCategory,
  getProductById,
};
