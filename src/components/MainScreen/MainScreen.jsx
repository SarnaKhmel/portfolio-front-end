import React from "react";
import Screen1 from "../Screens/Screen1";
import Screen2 from "../Screens/Screen2";
import Screen3 from "../Screens/Screen3";
import Screen4 from "../Screens/Screen4";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import styled from "styled-components";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("../../Languages/en.json"),
    },
    uk: {
      translation: require("../../Languages/uk.json"),
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const MainScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <Main>
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
      </Main>
    </>
  );
};

const Main = styled.div``;

export default MainScreen;
