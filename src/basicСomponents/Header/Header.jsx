import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ukraine from "./FlagIcons/ukraine.png";
import usa from "./FlagIcons/united-states.png";

import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";

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
const Header = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <HeaderBlock>
      <StyledLink to="/">{t("OleksaSarnatskyi")} </StyledLink>
      <LinkBlock>
        <StyledLink to="/">{t("Home")}</StyledLink>
        <StyledLink to="/">{t("Projects")} </StyledLink>
        <StyledLink to="/">{t("Resume")} </StyledLink>
        <StyledLink to="/">{t("Contacts")} </StyledLink>
        <Select onChange={(e) => changeLanguage(e.target.value)}>
          <Option value="en">🇺🇸{t(" en")}</Option>
          <Option value="uk">🇺🇦{t(" uk")}</Option>
        </Select>
      </LinkBlock>
    </HeaderBlock>
  );
};

const LinkBlock = styled.div``;

const Select = styled.select`
  border: none;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  color: white;
`;
const Option = styled.option`
  border: none;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  color: white;
  text-align: center;
`;

const HeaderBlock = styled.div`
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #eeeeee;
  width: 100vw;
  position: fixed;
  font-size: 24px;
  font-weight: bold;
  background-color: #222831;
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
