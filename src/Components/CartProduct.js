import React from "react";
import { useProductContext } from "../context/context";

const CartProducts = ({ imageSource, id, title, price, quantity }) => {
  const {
    increaseItemQuantity,
    decreaseItemQuantity,
    deleteItem,
    changeCartType,
  } = useProductContext();
  const handleControl = (e) => {
    const btn = e.target;
    if (btn.classList.contains("plus-item")) {
      increaseItemQuantity(id);
    }
    if (btn.classList.contains("minus-item")) {
      decreaseItemQuantity(id);
    }
    if (btn.classList.contains("delete__btn")) {
      deleteItem(id);
    }
    if (btn.classList.contains("save__btn")) {
      // saveItemToLater(id)
      changeCartType(id, "later");
    }
  };
  return (
    <article className="cart__item">
      <div className="item--grid">
        <div className="cart__item--img">
          <img src={imageSource} alt={title} />
        </div>
        <div className="cart__item--desc">
          <p className="cart__item--title">{title}</p>
          <p className="cart__item--available">in stuck</p>
          <p className="cart__item--price">${price}</p>
        </div>
      </div>
      <div className="cart__item--control" onClick={handleControl}>
        <div className="cart__item--quantity">
          <button className="u-btn minus-item cart--btn fas fa-minus"></button>
          <p className="quantity"> {quantity} </p>
          <button className="u-btn plus-item cart--btn fas fa-plus"></button>
        </div>

        <button className="u-btn delete__btn cart--btn ">delete</button>
        <button className="u-btn save__btn cart--btn margin-left">
          save for later
        </button>
      </div>
    </article>
  );
};

export default CartProducts;
