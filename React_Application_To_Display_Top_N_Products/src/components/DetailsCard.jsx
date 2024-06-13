import { Link } from "@tanstack/react-router";
import PropTypes from "prop-types";
const DetailsCard = ({
  productName,
  price,
  rating,
  discount,
  availability,
  id,
}) => {
  return (
    <Link
      className="p-4 bg-white rounded-lg m-3 cursor-pointer"
      to={`/products/${id}`}
    >
      <h2 className="text-xl font-bold text-center">{productName}</h2>
      <p className="">Price: ${price}</p>
      <p className="">Rating: {rating}</p>
      <p className="">Discount: {discount}%</p>
      <p>Availability: {availability}</p>
    </Link>
  );
};
DetailsCard.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  discount: PropTypes.number,
  availability: PropTypes.string,
  id: PropTypes.number,
};
export default DetailsCard;
