import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useProductContext } from "../context";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const StyledBtn = styled.button`
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: var(--color-secondary-1);

  &:hover {
    background-color: var(--color-secondary-1-light);
  }
`;

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { setIsCartOpen, cartItemCalc } = useProductContext();
  const openCartHandler = () => {
    setIsCartOpen(true);
  };
  const cartValue = cartItemCalc();
  const handleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  return (
    <section className="navigation">
      <div
        onClick={handleBurger}
        className={`burger ${isBurgerOpen ? "toggle" : null}`}
      >
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>

      <Link to="/" className="logo">
        <span>comfy</span> <br />
        <span>furniture</span>
      </Link>

      <nav className={`nav ${isBurgerOpen ? "showLinks" : null}`}>
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
          <li className="nav__item ">
            {isAuthenticated ? (
              <StyledBtn className="nav__link u-btn" onClick={logout}>
                log out
              </StyledBtn>
            ) : (
              <StyledBtn
                className="nav__link u-btn"
                onClick={loginWithRedirect}
              >
                log in
              </StyledBtn>
            )}
          </li>
        </ul>
      </nav>

      <button onClick={openCartHandler} className="cart__placeholder u-btn">
        <span className="fas fa-shopping-cart cart__placeholder--icon">
          <span className="items-in-cart cart__quantity cart__placeholder--text">
            {cartValue ? cartValue.totalQuantity : 0}
          </span>
        </span>
      </button>
    </section>
  );
};

export default Navbar;
