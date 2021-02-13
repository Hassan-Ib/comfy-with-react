import React from "react";
import { useProductContext } from "../context/context";
const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useProductContext();
  const handleCartClose = () => {
    setIsCartOpen(false);
  };
  return (
    <div className={`cart__overlay ${isCartOpen && "cart--open"}`}>
      <section className="cart__container">
        <button
          onClick={handleCartClose}
          className="fas fa-times cart--close"
        ></button>
        <div className="cart__container--header">
          <h4 className="title">
            total items in cart : (
            <span id="items-in-cart" className="items-in-cart">
              10
            </span>
            items) :<span id="total-items-price">$1,500.00</span>
          </h4>
          <button className="u-btn u-btn-big proceed-btn">
            proceed to checkout
          </button>
        </div>
        <section id="cart__items--container" className="cart__items">
          <p>cart is empty</p>
        </section>
        <section
          id="later__items--container"
          className="later__items"
        ></section>
      </section>
    </div>
  );
};

export default Cart;
