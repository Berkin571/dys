import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";

// german translations
// import pagesDE from "./translations/de/pages.json";

// english translations
// import pagesEN from "./translations/en/pages.json";

import type { i18n as i18nType } from "i18next";

export const i18nResources = {
  de: {
    // general: pagesDE,
  },
  en: {
    // general: pagesEN,
  },
};

export const i18nNamespaces = ["general", "components", "containers"];

let i18n: i18nType = createInstance();

export function setI18nInstance(instance: i18nType) {
  i18n = instance;
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    partialBundledLanguages: true,
    debug: false,
    lng: "de",
    interpolation: {
      escapeValue: false,
    },
    ns: i18nNamespaces,
    resources: i18nResources,
  });
}

export function getAppI18nInstance() {
  return i18n;
}
