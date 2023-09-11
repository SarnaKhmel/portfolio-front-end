import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderBlock>
      <StyledLink to="/"> Home </StyledLink>
      <StyledLink to="/"> Projects </StyledLink>
      <StyledLink to="/"> Resume </StyledLink>
      <StyledLink to="/"> Contacts </StyledLink>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;

  font-size: 24px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-right: 50px;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export default Header;
