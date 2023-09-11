import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">🇺🇸</option>
          <option value="uk">🇺🇦</option>
        </select>
      </LinkBlock>
    </HeaderBlock>
  );
};

const LinkBlock = styled.div``;

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
