import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Product, Home, About, Error, ProductModal } from "./pages";
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
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
