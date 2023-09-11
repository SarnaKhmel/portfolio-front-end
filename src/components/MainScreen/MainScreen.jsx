import React from "react";
import Screen1 from "../Screens/Screen1";
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

const MainScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <Screen1 />
      <div>
        <div>
          <h3>{t("welcome")}</h3>
          <p>{t("about")}</p>
          <p>{t("contact")}</p>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
