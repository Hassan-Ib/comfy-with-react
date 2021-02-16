import React, { useState, useRef } from "react";
import { useProductContext } from "../context/context";
// import styled from "styled-components";

// const Wrapper = styled.section`
//   .filters-container {

//   }
// `;

const Filter = () => {
  const { filter } = useProductContext();
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState(0);

  const dragButtonRef = useRef();
  const searchRef = useRef();
  const handleSearch = () => {
    const SearchValue = searchRef.current.value;
    setSearch(SearchValue);
  };

  React.useEffect(() => {
    filter(search, "title");
  }, [search, filter]);
  const handlePriceInput = () => {
    const priceFilterValue = dragButtonRef.current.value;
    setPriceFilter(priceFilterValue);
    // console.log(dragButtonRef.current.value);
  };

  return (
    <section className="filter">
      <div className="filters-container">
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
            min="0"
            max="80"
            type="range"
            className="price-filter"
            ref={dragButtonRef}
            value={priceFilter}
            onChange={handlePriceInput}
          />
        </form>
        <p className="price-value">Value : $ {priceFilter}</p>
      </div>
    </section>
  );
};

export default Filter;
