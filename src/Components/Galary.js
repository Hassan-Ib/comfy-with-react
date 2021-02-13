import React from "react";
import Product from "./Product";

const Galary = ({ productList }) => {
  console.log("productList", productList);
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
  return (
    <div className="grid__parent">
      {productList.map((product) => {
        const { id } = product;
        return <Product {...product} key={id} />;
      })}
    </div>
  );
};

export default Galary;
