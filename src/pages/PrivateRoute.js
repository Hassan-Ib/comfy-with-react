import React from "react";
import { Route, Redirect, useHistory, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import { useProductContext } from "../context";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  const history = useHistory();
  // const { setIsCartOpen, isCartOpen } = useProductContext();
  const isUser = isAuthenticated && user;
  const location = useLocation();
  console.log("location", location);
  console.log(history.location);

  return (
    <Route {...rest}>{isUser ? children : <Redirect to="/products" />};</Route>
  );
};

export default PrivateRoute;
