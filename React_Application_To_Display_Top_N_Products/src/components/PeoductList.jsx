
import React, { useState, useEffect } from "react";
import axios from "axios";

const categories = [
  "Phone",
  "Computer",
  "TV",
  "Earphone",
  "Tablet",
  "Charger",
  "Mouse",
  "Keypad",
  "Bluetooth",
  "Pendrive",
  "Remote",
  "Speaker",
  "Headset",
  "Laptop",
  "PC",
];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("name");
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4MjY2OTY0LCJpYXQiOjE3MTgyNjY2NjQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjQ4OWI3MTZkLWY0ZjMtNDY1ZS1iZWE2LTllZTQ0NTUyNjFlMCIsInN1YiI6IjIxMDAwMzAxOTVjc2VoQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IktMIFVuaXZlcnNpdHkiLCJjbGllbnRJRCI6IjQ4OWI3MTZkLWY0ZjMtNDY1ZS1iZWE2LTllZTQ0NTUyNjFlMCIsImNsaWVudFNlY3JldCI6ImFETUZVWWpkSUVGcUdVZ3oiLCJvd25lck5hbWUiOiJWZWxhZ2EgSGVtYW50aCBkYXMgY2hvd2RhcnkiLCJvd25lckVtYWlsIjoiMjEwMDAzMDE5NWNzZWhAZ21haWwuY29tIiwicm9sbE5vIjoiMjEwMDAzMDE5NSJ9.nvK0Xp0dS3VObQZKrodLUrtmnBeV8UKLooHjzwAqtEY"
  );

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/categories/${category}/products?sort=${sort}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category, sort, token]);

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  const handleChangeToken = (event) => {
    setToken(event.target.value);
  };

  return (
    <div>
      <h2>Product List</h2>
      <label htmlFor="category">Category:</label>
      <select id="category" value={category} onChange={handleChangeCategory}>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" value={sort} onChange={handleChangeSort}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <label htmlFor="token">Bearer Token:</label>
      <input
        type="text"
        id="token"
        value={token}
        onChange={handleChangeToken}
      />
      <button onClick={fetchProducts}>Fetch Products</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
