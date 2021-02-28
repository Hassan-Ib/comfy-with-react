import React from "react";
import { Link } from "react-router-dom";
// import { Navbar } from "../Components";

const About = () => {
  return (
    <article className="">
      {/* <Navbar /> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas
        quaerat sapiente tempora expedita omnis cupiditate a voluptate accusamus
        aliquid. Deserunt, excepturi. Est ipsam ad inventore distinctio dolores,
        recusandae iusto.
      </p>
      <Link to="/" className="u-btn-link">
        back home
      </Link>
    </article>
  );
};

export default About;
