import React from "react";
import Product from "./Product";

const Galary = ({ page, productList }) => {
  if (!productList) {
    return (
      <>
        <h3>product</h3>
        <div className="grid__parent">
          <article className="item"></article>
        </div>
      </>
    );
  }
  if (productList.length < 1) {
    return <h2>no item with name</h2>;
  }
  return (
    <div className="grid__parent">
      {productList.map((product) => {
        const { id } = product;
        return <Product page={page} {...product} key={id} />;
      })}
    </div>
  );
};

export default Galary;
