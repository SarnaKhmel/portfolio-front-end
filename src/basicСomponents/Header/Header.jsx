import React from "react";
import styled from "styled-components";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import { Link } from "react-scroll";

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
    <HeaderBlock name="header">
      <StyledLink to="header" spy={true} smooth={true} duration={250}>
        {t("OleksaSarnatskyi")}
      </StyledLink>
      <LinkBlock>
        <StyledLink
          activeClass="active"
          to="screen1"
          spy={true}
          smooth={true}
          duration={250}>
          {t("Home")}
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="screen2"
          spy={true}
          smooth={true}
          duration={250}>
          {t("Projects")}
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="screen3"
          spy={true}
          smooth={true}
          duration={250}>
          {t("Resume")}
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="screen4"
          spy={true}
          smooth={true}
          duration={250}>
          {t("Contacts")}
        </StyledLink>
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
  height: 100px;
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
