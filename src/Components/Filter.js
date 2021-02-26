import React, { useState, useRef } from "react";
import { useProductContext } from "../context";

const Filter = () => {
  const { setProductPageProduct, products } = useProductContext();
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState(100);
  const filter = (value, filterType) => {
    let newPageProducts;
    if (filterType === "TITLE") {
      const regex = new RegExp(`^${value}`, "i");
      newPageProducts = products.filter((product) => regex.test(product.title));
    }
    if (filterType === "PRICE") {
      newPageProducts = products.filter((product) => product.price <= value);
    }
    if (filterType === "COMPANY") {
      if (value === "All") {
        newPageProducts = [...products];
      } else {
        const creatorRegexp = new RegExp(value, "i");
        newPageProducts = products.filter((product) =>
          creatorRegexp.test(product.creator)
        );
      }
    }
    setProductPageProduct([...newPageProducts]);
  };

  const dragButtonRef = useRef();
  const searchRef = useRef();
  const handleSearch = () => {
    const SearchValue = searchRef.current.value;
    setSearch(SearchValue);
    filter(SearchValue, "TITLE");
  };

  const handlePriceInput = () => {
    const priceFilterValue = dragButtonRef.current.value;
    setPriceFilter(priceFilterValue);
    filter(priceFilterValue, "PRICE");
  };
  const handleCompanyBtn = (e) => {
    const btn = e.target;
    if (btn.classList.contains("companies-btn")) {
      const btnValue = btn.innerText;
      filter(btnValue, "COMPANY");
    }

    // console.log(btnValue);
  };

  return (
    <section className="">
      <div className="filter filters-container">
        <form onSubmit={handleSearch} className="input-form">
          <input
            ref={searchRef}
            value={search}
            onChange={handleSearch}
            type="text"
            className="search-input"
            placeholder="search..."
          />
        </form>
        <div>
          <h4>Companies</h4>
          <article onClick={handleCompanyBtn} className="companies">
            <button className="companies-btn">all</button>
            <button className="companies-btn">ikea</button>
            <button className="companies-btn">marcos</button>
            <button className="companies-btn">caressa</button>
            <button className="companies-btn">liddy</button>
          </article>
        </div>

        <form className="price-form">
          <h4>Price range</h4>
          <input
            name="price"
            min="0"
            max="100"
            type="range"
            className="price-filter"
            ref={dragButtonRef}
            value={priceFilter}
            onChange={handlePriceInput}
          />
          <br />
          <p className="price-value">Value : $ {priceFilter}</p>
        </form>
      </div>
    </section>
  );
};

export default Filter;
