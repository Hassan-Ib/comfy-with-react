import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Product, Home, About, Error } from "./pages";
// import GlobalStyle from "./GlobalCss";
import "./sass/main.scss";
function App() {
  return (
    <Router>
      {/* <GlobalStyle /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
