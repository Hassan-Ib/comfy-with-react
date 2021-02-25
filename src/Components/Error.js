import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  height: 100%;
  text-align: center;
  letter-spacing: 2px;
  padding-top: 25%;
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
const Error = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Error;
