import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useProductContext } from "../context/context";
import { Link } from "react-router-dom";

const StyledArticle = styled.article`
  position: relative;
  a {
  }
`;
const AbsoluteP = styled.p`
  color: red;
  position: absolute;
  top: 40%;
  left: 15%;
  width: 70%;
  border: 2px solid black;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  letter-spacing: 2px;
  text-decoration: capitalize;
  font-style: italic;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: inline-block;
`;
const Product = ({ imageSource, title, price, id }) => {
  const { addToCart, isItemInCart } = useProductContext();
  const [itemMsg, setItemMsg] = useState({
    state: false,
    msg: "",
  });

  const addToCartHandler = () => {
    const itemInCart = isItemInCart(id);
    if (itemInCart) {
      setItemMsg({ ...itemMsg, state: true, msg: `${title} already in cart` });
      return;
    }
    setItemMsg({ ...itemMsg, state: true, msg: `${title} added to cart` });
    addToCart(id);
  };
  useEffect(() => {
    const inCartTimeout = setTimeout(() => {
      setItemMsg({ ...itemMsg, state: false, msg: "" });
    }, 1000);

    return () => {
      clearTimeout(inCartTimeout);
    };
  }, [itemMsg]);
  return (
    <>
      <StyledArticle className="item">
        <div className="item__container">
          <img src={imageSource} alt={title} className="item__image" />
          <div className="item__btn">
            <StyledLink
              to={`/product/${id}`}
              className="btn u-btn item__btn--search fas fa-search"
            >
              {" "}
              view
            </StyledLink>

            <button
              onClick={addToCartHandler}
              className="btn item__btn--cart u-btn"
            >
              cart <span className="fas fa-shopping-cart"></span>
            </button>
          </div>
        </div>
        <div className="item__description">
          {itemMsg.state && <AbsoluteP>{itemMsg.msg}</AbsoluteP>}
          <p className="item__name">{title}</p>
          <p className="item__price">${price}</p>
        </div>
      </StyledArticle>
    </>
  );
};

export default Product;
