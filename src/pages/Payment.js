import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Payment = () => {
  const { logout } = useAuth0();

  return (
    <section>
      payment page
      <button className="u-btn" onClick={logout}>
        log out
      </button>
    </section>
  );
};

export default Payment;
