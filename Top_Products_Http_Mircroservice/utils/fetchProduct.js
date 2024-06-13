const { v4: uuidv4 } = require("uuid");

const getProduct = async (n, categoryName, page = 1) => {
  try {
    const response = await fetch(
      `http://20.244.56.144/test/companies/AMZ/categories/${categoryName}/products?top=${n}&minPrice=1&maxPrice=10000&page=${page}`
    );
    let products = await response.json();
    products = products.map((product) => ({
      ...product,
      id: uuidv4(),
    }));
    const nextPageAvailable = products.length === n;
    if (nextPageAvailable) {
      const nextPageProducts = await getProduct(n, categoryName, page + 1);
      products = products.concat(nextPageProducts);
    }
    return products;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
module.exports = getProduct;
