import React from "react";

import { Link } from "react-router-dom";
import { useProductContext } from "../context/context";

const Navbar = () => {
  const { setIsCartOpen } = useProductContext();

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  return (
    <section className="navigation">
      <div className="burger">
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>

      <Link to="/" className="logo">
        <span>comfy</span> <br />
        <span>furniture</span>
      </Link>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/products" className="nav__link">
              Products
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About Us
            </Link>
          </li>
        </ul>
      </nav>

      <button onClick={openCartHandler} className="cart__placeholder u-btn">
        <span className="fas fa-shopping-cart cart__placeholder--icon">
          <span className="items-in-cart cart__quantity cart__placeholder--text">
            20
          </span>
        </span>
      </button>
    </section>
  );
};

export default Navbar;
