const getProduct = require("../utils/fetchProduct");
async function getTopProductsByCategory(categoryName, n, page, sort) {
  try {
    const products = await getProduct(n, categoryName, page);
    const sortedProducts = productSorter(products, sort.by, sort.order);
    const startIndex = (page - 1) * n;
    const endIndex = startIndex + n;
    return sortedProducts.slice(startIndex, endIndex);
  } catch (error) {
    console.error("Error fetching top products by category:", error);
    throw error;
  }
}

module.exports = {
  getTopProductsByCategory,
};
async function getProductById(categoryName, productId) {
  try {
    const products = await getProduct(1, categoryName);
    return products.find((product) => product.id === productId);
  } catch (error) {
    console.error("Error fetching product by id:", error);
    throw error;
  }
}
module.exports = {
  getTopProductsByCategory,
  getProductById,
};
