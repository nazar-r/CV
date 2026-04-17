import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    lng: "en",
    react: {
        useSuspense: false,
    },
    resources: {
        en: {
            translation: {
                welcome: "Welcome Here!",
                welcomeTitle: "Nazar Rozhalovsky, FullStack Developer",
                welcomeButton: "Begin",
                projects: "Explore my projects!",
                projectsTitle1: "Messaging App",
                projectsTitle2: "Notes App",
                projectsTitle3: "My Certifications",
                menu: "Menu",
                menuTitle1: "About Me",
                menuTitle2: "Projects",
                menuTitle3: "Contacts",

            },
        },
        ua: {
            translation: {
                welcome: "Вітаю!",
                welcomeTitle: "Назар Рожаловський, FullStack-розробник",
                welcomeButton: "Почати!",
                projects: "Мої проєкти",
                projectsTitle1: "Месенджер",
                projectsTitle2: "Нотатник",
                projectsTitle3: "Мої сертифікації",
                menu: "Меню",
                menuTitle1: "Про МЕНЕ",
                menuTitle2: "мої Проєкти",
                menuTitle3: "мої Контакти",
            },
        },
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;