import React from "react";
import styled from "styled-components";

const Screen4 = () => {
  return (
    <ScreenBlock name="screen4">
      4
      <InfoBlock>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        incidunt itaque saepe eius ex velit debitis quas consectetur, rem
        quisquam libero facere suscipit ad perspiciatis unde aut quos eos
        dolorum!
      </InfoBlock>
    </ScreenBlock>
  );
};

const ScreenBlock = styled.div`
  height: 70vh;
  width: 100%;
  padding-top: 100px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
const InfoBlock = styled.div`
  margin-top: 100px;
`;
const ImgBlock = styled.div`
  display: flex;
  flex-align: center;
  justify-content: center;
`;

export default Screen4;
