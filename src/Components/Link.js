import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  /* color: ${(props) => (props.style?.color ? props.style?.color : "#000")};
  padding: ${(props) =>
    props.style?.padding ? props.style.padding : ".5rem .8rem"}; */
  letter-spacing: var(--letter-spacing, 0.5px);
  text-decoration: none;
  text-transform: capitalize;
  font-weight: var(--link-font-weight, 500);
  color: var(--link-color, #000);
`;

const Links = ({ style, path, children }) => {
  return (
    <StyledLink style={style} to={path}>
      {children}
    </StyledLink>
  );
};

export default Links;
