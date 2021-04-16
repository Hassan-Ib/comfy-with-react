import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${(props) => (props?.color ? props.color : "#000")};
  box-shadow: none;
  padding: 0.5rem 1rem;
  border: none;
  border: 2px solid #000;
  border-radius: 5px;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 1px;
  background-color: ${(props) => (props ? props.background : "#fff")};
  cursor: pointer;
`;
const Button = ({ color, background, onClick, children }) => {
  return (
    <StyledButton color={color} onClick={onClick} background={background}>
      {children}
    </StyledButton>
  );
};

export default Button;
