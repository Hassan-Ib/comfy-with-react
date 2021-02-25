import React from "react";
import { Error } from "../Components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Error>
      <h2>404</h2>
      <h4>error page can't be found :)</h4>
      <Link to="/" className="link" children="back home" />
    </Error>
  );
};
export default ErrorPage;
