import React, { useRef } from "react";

const CartProducts = ({ imageSource, id, title, price, quantity }) => {
  const controlRef = useRef();
  const handleControl = () => {
    console.log(controlRef.current);
  };
  return (
    <article className="cart__item">
      <div className="item--grid">
        <div className="cart__item--img">
          <img src={imageSource} alt={title} />
        </div>
        <div className="cart__item--desc">
          <p className="cart__item--title">${title}</p>
          <p className="cart__item--available">in stuck</p>
          <p className="cart__item--price">$${price}</p>
        </div>
      </div>
      <div
        className="cart__item--control"
        ref={controlRef}
        onClick={handleControl}
      >
        <div className="cart__item--quantity">
          <button className="u-btn minus-item cart--btn fas fa-minus"></button>
          <p className="quantity"> ${quantity} </p>
          <button className="u-btn plus-item cart--btn fas fa-plus"></button>
        </div>

        <button className="u-btn delete__btn cart--btn ">delete</button>
        <button className="u-btn save__btn cart--btn">save for later</button>
      </div>
    </article>
  );
};

export default CartProducts;
