import React from "react";

const SaveProduct = ({ imageSource, id, price, title }) => {
  const handleControl = (e) => {
    const btn = e.target;
    console.log(btn);
  };
  return (
    <article className="cart__item">
      <div className="item--grid">
        <div className="cart__item--img">
          <img src={imageSource} alt={title} />
        </div>
        <div className="cart__item--desc">
          <p className="cart__item--title">{title}</p>
          <p className="cart__item--available">in stuck</p>
          <p className="cart__item--price">${price}</p>
        </div>
      </div>
      <div className="cart__item--control" onClick={handleControl}>
        <button className="u-btn delete__btn cart--btn ">delete</button>
        <button className="u-btn save__btn cart--btn">add to cart</button>
      </div>
    </article>
  );
};

export default SaveProduct;