import React from "react";
import styled from "styled-components";

const Screen1 = () => {
  return (
    <ScreenBlock>
      <TitleBlock>1</TitleBlock>
      <ImgBlock>2</ImgBlock>
    </ScreenBlock>
  );
};

const ScreenBlock = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
const TitleBlock = styled.div`
  display: flex;
  flex-align: center;
  justify-content: center;
`;
const ImgBlock = styled.div`
  display: flex;
  flex-align: center;
  justify-content: center;
`;

export default Screen1;
