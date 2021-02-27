import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${(props) => (props ? props.color : "#000")};
  box-shadow: none;
  padding: 0.5rem 1rem;
  border: none;
  border: 2px solid #000;
  border-radius: 5px;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 2px;
  background-color: ${(props) =>
    props.background ? props.background : "#fff"};
`;
const Button = ({ value, buttonProps }) => {
  return <StyledButton {...buttonProps}>{value}</StyledButton>;
};

export default Button;
