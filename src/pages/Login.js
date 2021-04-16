import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../Components";
const LoginSection = styled.section``;
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <LoginSection>
      <Button color="black" onClick={loginWithRedirect}>
        Log in
      </Button>
    </LoginSection>
  );
};

export default Login;
