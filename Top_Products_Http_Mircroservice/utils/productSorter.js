function productSorter(products, sortBy, sortOrder) {
  if (!sortBy) {
    sortBy = "price";
  }
  if (!sortOrder) {
    sortOrder = "asc";

    products.sort((a, b) => {
      let comparison = 0;
      if (sortBy === "price") {
        comparison = a.price - b.price;
      } else if (sortBy === "rating") {
        comparison = b.rating - a.rating;
      } else if (sortBy === "discount") {
        comparison = a.discount - b.discount;
      }
      return sortOrder === "desc" ? comparison * -1 : comparison;
    });

    return products;
  }
}
module.exports = productSorter;
