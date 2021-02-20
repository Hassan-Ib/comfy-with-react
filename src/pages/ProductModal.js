import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProductContext } from "../context/context";

const ProductModal = () => {
  const { id } = useParams();
  const { products } = useProductContext();
  console.log(id);
  const [product] = products.filter((product) => product.id === id);
  console.log(product);
  // const { title, price, company } = product;
  return (
    <article>
      <div className="image">{/* <img src={imageSource} alt={title} /> */}</div>
      <Link to="/products">Go back home</Link>
      <p>{product.title}</p>
    </article>
  );
};

export default ProductModal;
