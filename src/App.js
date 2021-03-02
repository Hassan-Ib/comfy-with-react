import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Product,
  Home,
  About,
  ErrorPage,
  ProductModal,
  Payment,
  PrivateRoute,
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
        <Route path="/about">
          <About />
        </Route>
        <Route path="/product/:page/:id">
          <ProductModal />
        </Route>
        <PrivateRoute path="/payment">
          <Payment />
        </PrivateRoute>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
