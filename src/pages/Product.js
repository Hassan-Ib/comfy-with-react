import React from "react";
import { Navbar, Cart, Galary } from "../Components";
import { useProductContext } from "../context/context";

const Product = () => {
  const { products } = useProductContext();

  return (
    <>
      <Navbar />
      <Cart />
      <section className="product__page">
        <Galary productList={products} />
      </section>
    </>
  );
};

export default Product;
