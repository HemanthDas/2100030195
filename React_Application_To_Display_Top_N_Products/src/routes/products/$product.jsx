import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$product")({
  component: Product,
});

function Product() {
  const obj = [
    {
      productName: "Laptop 1",
      price: 2236,
      rating: 4.86,
      discount: 63,
      availability: "out-of-stock",
    },
    {
      productName: "Laptop 10",
      price: 7145,
      rating: 4.72,
      discount: 15,
      availability: "out-of-stock",
    },
    {
      productName: "Laptop 8",
      price: 511,
      rating: 4.64,
      discount: 87,
      availability: "yes",
    },
    {
      productName: "Laptop 3",
      price: 9102,
      rating: 4.6,
      discount: 98,
      availability: "out-of-stock",
    },
    {
      productName: "Laptop 10",
      price: 4101,
      rating: 4.52,
      discount: 37,
      availability: "out-of-stock",
    },
    {
      productName: "Laptop 14",
      price: 9254,
      rating: 4.23,
      discount: 56,
      availability: "yes",
    },
    {
      productName: "Laptop 11",
      price: 5683,
      rating: 3.63,
      discount: 56,
      availability: "out-of-stock",
    },
    {
      productName: "Laptop 13",
      price: 8686,
      rating: 3.6,
      discount: 24,
      availability: "yes",
    },
    {
      productName: "Laptop 13",
      price: 1244,
      rating: 3.17,
      discount: 45,
      availability: "yes",
    },
    {
      productName: "Laptop 1",
      price: 8521,
      rating: 2.32,
      discount: 91,
      availability: "out-of-stock",
    },
    {
      productName: "Laptop 5",
      price: 7980,
      rating: 1.07,
      discount: 89,
      availability: "out-of-stock",
    },
    {
      productName: "Laptop 11",
      price: 2652,
      rating: 0.92,
      discount: 70,
      availability: "yes",
    },
    {
      productName: "Laptop 4",
      price: 1258,
      rating: 0.79,
      discount: 33,
      availability: "yes",
    },
    {
      productName: "Laptop 9",
      price: 1742,
      rating: 0.53,
      discount: 39,
      availability: "out-of-stock",
    },
    {
      productName: "Laptop 1",
      price: 1059,
      rating: 0.08,
      discount: 21,
      availability: "out-of-stock",
    },
  ];
  const productID = Route.useParams();
  const product = obj.find(
    (product) => product.productName === productID.product
  );
  return (
    <div className="flex justify-center items-center">
      <div className="p-4 bg-white rounded-lg m-3 text-2xl">
        <h2 className="text-center text-xl font-bold">
          {product?.productName}
        </h2>
        <p className="">Price: {product?.price}</p>
        <p className="">Rating: {product?.rating}</p>
        <p className="">Discount: {product?.discount}</p>
        <p
          className={product?.availability === "out-of-stock" && "text-red-600"}
        >
          Availability: {product?.availability}
        </p>
      </div>
    </div>
  );
}
