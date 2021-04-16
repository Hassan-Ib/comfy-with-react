import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Product,
  Home,
  ErrorPage,
  ProductModal,
  Payment,
  PrivateRoute,
  Login,
} from "./pages";
// import GlobalStyle from "./GlobalCss";
import "./sass/main.scss";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
        <Route path="/product/:page/:id">
          <ProductModal />
        </Route>
        <PrivateRoute path="/payment">
          <Payment />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
