import React from "react";
import { Navbar, Cart, Galary, Loader, Error } from "../Components";
import { Link } from "react-router-dom";
import { useProductContext } from "../context";
// import Cart from
import FrameImgBig from "../images/frame-big.jpg";
import FrameImgSm1 from "../images/frame-small-1.jpg";
import FrameImgSm2 from "../images/frame-small-2.jpg";

const Home = () => {
  const { products, isLoading, loadError } = useProductContext();
  const homeProduct = products.filter((product) => product.price < 20);
  if (isLoading) {
    return <Loader />;
  }
  if (loadError.state) {
    // console.log(loadError.message);
    return (
      <Error>
        <h4>{loadError.message}</h4>
        <button
          className="u-btn u-btn-style"
          onClick={() => {
            window.location.reload();
          }}
        >
          reload page
        </button>
      </Error>
    );
  }
  return (
    <>
      <Navbar />
      <Cart />
      <main id="home">
        <header className="home__header">
          <section className="hero header__hero">
            <div className="hero__container">
              <h1 className="hero__text">you’are home unWined relax rest</h1>
              <h3 className="hero__text-desc">Embrace your choices - we do</h3>
              <a href="#products" className="u-btn hero__btn">
                Shop now
              </a>
            </div>
          </section>
          {/* <!-- hero__text --> */}
          <section className="header__frame">
            <div className="frame__component">
              <div className="frame frame__big">
                <img
                  className="u-picture-frame"
                  src={FrameImgBig}
                  alt="Nice furniture frame"
                />
              </div>

              <div className="frame frame__small frame__small--1">
                <img
                  className="u-picture-frame"
                  src={FrameImgSm1}
                  alt="Nice furniture frame"
                />
              </div>
              <div className="frame frame__small frame__small--2">
                <img
                  className="u-picture-frame"
                  src={FrameImgSm2}
                  alt="Nice furniture frame"
                />
              </div>
            </div>
          </section>
        </header>
        <section id="products">
          <div className="u-section__title">
            <h3 className="title">
              we feature products that makes home really feels like home
            </h3>
          </div>
          <Galary page="home" productList={homeProduct || null} />
          <div className="see__more u-center">
            <Link to="/products">
              Check more products <span className="fas fa-arrow-right"></span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
