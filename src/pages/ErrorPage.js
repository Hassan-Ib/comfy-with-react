import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.section`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  letter-spacing: 2px;

  h2 {
    font-size: 10rem;
  }
  h4 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .link {
    color: #892628;
    background-color: #fff;
    text-decoration: none;
    text-transform: capitalize;

    font-weight: 500;
    padding: 0.5rem 1rem;
    border: 2px solid #000;
    border-radius: 5px;
  }
`;
const Error = () => {
  return (
    <Wrapper>
      <h2>404</h2>
      <h4>error page can't be found :)</h4>
      <Link to="/" className="link" children="back home" />
    </Wrapper>
  );
};
export default Error;
