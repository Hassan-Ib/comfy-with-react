import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProductContext } from "../context/context";
import styled from "styled-components";
const ProductView = styled.article``;

const ProductModal = () => {
  const { id } = useParams();
  const { products } = useProductContext();

  if (products.length !== 0) {
    const [product] = products.filter((product) => product.id === id);
    console.log(product);
    return (
      <article className="u-center product__modal">
        <div className="">
          <p className="u-section__title">{product.title}</p>
          <div className="image">
            <img src={product.imageSource} alt={product.title} />
          </div>
          <Link to="/products" className="u-btn-link u-link-hover">
            Go back home
          </Link>
        </div>
      </article>
    );
  }

  // console.log(products);
  return (
    <article>
      <Link to="/products">Go back home</Link>
    </article>
  );
};

export default ProductModal;
