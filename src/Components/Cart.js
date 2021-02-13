import React from "react";
import { useProductContext } from "../context/context";
import CartProducts from "./CartProduct";
const Cart = () => {
  const { isCartOpen, setIsCartOpen, cart, cartItemCalc } = useProductContext();
  const handleCartClose = () => {
    setIsCartOpen(false);
  };
  const cartValue = cartItemCalc();

  return (
    <div className={`cart__overlay ${isCartOpen && "cart--open"}`}>
      <section className="cart__container">
        <button
          onClick={handleCartClose}
          className="fas fa-times cart--close"
        ></button>
        <div className="cart__container--header">
          <h4 className="title">
            total items in cart : {cartValue ? cartValue.totalQuantity : 0}{" "}
            items
            <p id="total-items-price">
              Total price : ${" "}
              {cartValue ? cartValue.totalPrice.toFixed(2) : "0.00"}
            </p>
          </h4>
          <button className="u-btn u-btn-big proceed-btn">
            proceed to checkout
          </button>
        </div>
        <section id="cart__items--container" className="cart__items">
          {cart ? (
            cart.map((product) => {
              const { id } = product;
              return <CartProducts key={id} {...cart} />;
            })
          ) : (
            <p>cart is empty</p>
          )}
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
