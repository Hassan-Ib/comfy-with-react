import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();
  console.log("location >>>>", location);

  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <Route {...rest}>{isUser ? children : <Redirect to="/login" />};</Route>
  );
};

export default PrivateRoute;
