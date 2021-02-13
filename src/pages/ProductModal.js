import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductModal = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      ProductModal
      <Link to="/products">Go back home</Link>
    </div>
  );
};

export default ProductModal;
