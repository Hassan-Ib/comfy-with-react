import React, { useState } from "react";
import { useProductContext } from "../context/context";
import styled from "styled-components";

const Filter = () => {
  const { setProductPageProducts } = useProductContext();

  return (
    <section className="filter">
      <div className="filters-container">
        <form className="input-form">
          <input type="text" className="search-input" placeholder="search..." />
        </form>

        <h4>Company</h4>
        <article className="companies">
          <button className="companies-btn">all</button>
          <button className="companies-btn">ikea</button>
          <button className="companies-btn">marcos</button>
          <button className="companies-btn">caressa</button>
          <button className="companies-btn">liddy</button>
        </article>

        <h4>Price</h4>
        <form className="price-form">
          <input
            type="range"
            className="price-filter"
            min="0"
            value="50"
            max="80"
          />
        </form>
        <p className="price-value">Value : $80</p>
      </div>
    </section>
  );
};

export default Filter;
