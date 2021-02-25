import React from "react";
import { Navbar, Cart, Galary, Filter } from "../Components";
import { useProductContext } from "../context";

const Product = () => {
  const { productPageProducts } = useProductContext();

  return (
    <>
      <Navbar />
      <Cart />
      <section className="product__page">
        <Filter />
        <Galary page="products" productList={productPageProducts} />
      </section>
    </>
  );
};

export default Product;
