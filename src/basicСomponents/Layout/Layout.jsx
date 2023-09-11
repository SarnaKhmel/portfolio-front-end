import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <LayoutBlock>
      <Header />
      <Block>{children}</Block>
      <Footer />
    </LayoutBlock>
  );
};

export const LayoutBlock = styled.div`
  width: 100vw;
  background: #222831;
`;

export const Block = styled.div`
  padding-top: 125px;
  min-height: 100vh;
`;

export default Layout;
