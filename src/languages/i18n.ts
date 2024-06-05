import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { zh_TW } from "./zh_TW";

const resources = {
    'en': {
        translation: en,
    },
    'zh-TW': {
        translation: zh_TW,
    },
};

i18n
    .use(i18nBackend)
    .use(initReactI18next)
    .init({
        lng: 'en',             //預設語言
        fallbackLng: 'en',     //如果當前切換的語言沒有對應的翻譯則使用這個語言，
        interpolation: {
            escapeValue: false,
        },
        resources: resources,
    });

export default i18n;