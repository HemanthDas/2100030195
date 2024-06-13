const { v4: uuidv4 } = require("uuid");

// Function to fetch products from the API
const getProduct = async (Bearer, n, categoryName, page = 1) => {
  try {
    const response = await fetch(
      `http://20.244.56.144/test/companies/AMZ/categories/${categoryName}/products?top=${n}&minPrice=1&maxPrice=10000&page=${page}`,
      {
        headers: {
          Authorization: Bearer,
        },
      }
    );

    // Check if the response is not successful
    if (!response.ok) {
      let errorMessage = "Unknown error occurred";
      if (response.status === 401) {
        errorMessage = "Unauthorized";
      } else if (response.status === 404) {
        errorMessage = "Category not found";
      }
      return Error(errorMessage);
    }

    // Parse the response as JSON
    let products = await response.json();

    // Generate unique ids for each product
    let pid = 1;
    products = products.map((product) => ({
      ...product,
      pid: uuidv4(),
      id: pid++, // This is a temporary solution to generate unique ids
    }));

    return products;
  } catch (error) {
    console.error("Error fetching product:", error.message);
    throw error;
  }
};

module.exports = getProduct;
