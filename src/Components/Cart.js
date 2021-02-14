import React from "react";
import { useProductContext } from "../context/context";
import CartProducts from "./CartProduct";
import SaveProduct from "./SaveProduct";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cart, cartItemCalc } = useProductContext();
  const isLaterItem = cart.filter((item) => item.cartType === "later").length;
  console.log(isLaterItem);
  const handleCartClose = () => {
    setIsCartOpen(false);
  };
  const cartValue = cartItemCalc();
  return (
    <div className={`cart__overlay ${isCartOpen && "cart--open"}`}>
      <section className="cart__container">
        <span
          onClick={handleCartClose}
          className="fas fa-times cart--close"
        ></span>
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
            cart
              .filter((item) => item.cartType === "cart")
              .map((product) => {
                const { id } = product;
                return <CartProducts key={id} {...product} />;
              })
          ) : (
            <p>cart is empty</p>
          )}
        </section>
        <div className="cart__container--header">
          {isLaterItem ? (
            <h3 className="title">
              Number of items saved for later {isLaterItem}
            </h3>
          ) : null}
        </div>
        <section id="later__items--container" className="cart__items">
          {isLaterItem
            ? cart
                .filter((item) => item.cartType === "later")
                .map((product) => {
                  const { id } = product;
                  return <SaveProduct key={id} {...product} />;
                })
            : null}
        </section>
      </section>
    </div>
  );
};

export default Cart;
