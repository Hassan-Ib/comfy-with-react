import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import { AppContext } from "./context";
import { Global } from "./style";
import { Auth0Provider } from "@auth0/auth0-react";

// domain id =  dev-mgbdfbjd.us.auth0.com
// client id = 9XUwODbw66voiBghS45reX6DECKdq3YQ

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mgbdfbjd.us.auth0.com"
      clientId="9XUwODbw66voiBghS45reX6DECKdq3YQ"
      redirectUri={window.location.origin}
    >
      <AppContext>
        <Global />
        <App />
      </AppContext>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
