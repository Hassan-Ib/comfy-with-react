import React from "react";
import { useProductContext } from "../context/context";
import { Link } from "react-router-dom";

const Product = ({ imageSource, title, price, id }) => {
  const { addToCart } = useProductContext();
  const addToCartHandler = () => {
    addToCart(id);
  };
  return (
    <>
      <article className="item">
        <div className="item__container">
          <img src={imageSource} alt={title} className="item__image" />
          <div className="item__btn">
            <Link to={`/product/${id}`} className="btn item__btn--search u-btn">
              <span className="fas fa-search"></span>
            </Link>
            <button
              onClick={addToCartHandler}
              className="btn item__btn--cart u-btn"
            >
              <span className="fas fa-shopping-cart"></span>
            </button>
          </div>
        </div>
        <div className="item__description">
          <p className="item__name">${title}</p>
          <p className="item__price">${price}</p>
        </div>
      </article>
    </>
  );
};

export default Product;
