import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProductContext } from "../context";
import { Loader, Error } from "../Components";

const ProductModal = () => {
  const { id, page } = useParams();
  const { products, isLoading, loadError } = useProductContext();

  if (isLoading) {
    return (
      <article>
        <Loader />
        <Link to="/products">Go back home</Link>
      </article>
    );
  }

  if (loadError.state) {
    return (
      <Error>
        <h4>{loadError.message}</h4>
      </Error>
    );
  }
  // console.log(products);
  // console.log(loadError);
  const [product] = products.filter((product) => product.id === id);
  return (
    <article className="u-center product__modal">
      <div className="modal">
        <div className="image">
          <img
            src={product.imageSource}
            alt={product.title}
            className="u-image-fit"
          />
        </div>
        <div className="product__description">
          <p className="product--name">{product.title}</p>
          <p>
            {product.creator} $ {product.price}
          </p>
          <Link to={page === "home" ? "/" : `/${page}`} className="u-btn">
            Go back {page}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductModal;
