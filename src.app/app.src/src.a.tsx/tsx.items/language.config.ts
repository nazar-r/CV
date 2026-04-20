import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("lang") || "ua";

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: "ua",
        lng: savedLang,
        supportedLngs: ["en", "ua"],
        interpolation: {
            escapeValue: false,
        },
        resources: {
            ua: {
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

                    about: "My Journey",
                    aboutTitle1: "HI! i am nazar rozhalovsky",
                    aboutDesc1: "Fullstack web developer with 2+ years of experience with REACT AND NODE.JS (NEST.JS)",
                    aboutTitle2: "before",
                    aboutDesc2: "My journey began at various it courses, where I discovered it through design and web projects. I learned the fundamentals of developing mockups, building small sites and web architecture",
                    aboutTitle3: "My apps - the aMessage",
                    aboutDesc3: "Designed in 2026. A WebSocket-based messenger with end-to-end encryption from Libsodium. Allows you to chat securely. used google and github Authentication",
                    aboutTitle4: "My apps - the Anote",
                    aboutDesc4: "Designed in 2024. the first author's project. notes web application with crud based on react and nest.js. used google and github Authentication",
                    aboutTitle5: "JS Development - SoftServe Academy",
                    aboutDesc5: "In 2024 i Completed an intensive html (css) and JavaScript program at SoftServe Academy. participated in softserve team projects and developed apps",
                    aboutTitle6: "Node.js Development - personal experience",
                    aboutDesc6: "in 2024 Development of my personal notes app based on React and Nest.js has begun",
                    aboutTitle7: "devops AND databases - SoftServe Academy",
                    aboutDesc7: "In 2024-2025 I completed a six-month team-based courses in DevOps and databases. I continued working on designs and personal projects",
                    aboutTitle8: "react sertificate - SoftServe Academy",
                    aboutDesc8: "Having gained solid development experience, I continued working on certifications at SoftServe. In the summer of 2025, I received a softserve certificate of react developer",
                    aboutTitle9: "keep moving!",
                    aboutDesc9: "I continue to thoroughly explore and use new practices in web development. I am always ready to implement the latest and most innovative solutions",

                    mess: "The Messaging App",
                    messTitle1: "A WebSocket-based messaging app with end-to-end encryption from Libsodium",
                    messDesc1: "link",
                    messDesc2: "on github",
                    messTitle2: "Technologies used",
                    messTitle3: "hosted on",
                    messDesc3: "the frontend is hosted on Vercel. The backend is on Render and Supabase. The app is available 24/7",

                    note: "The Note App",
                    noteTitle1: "The first author's project. notes web application based on react and nest.js",
                    notesDesc2: "on github",
                    notesTitle2: "Technologies used",

                    cerf: "My CERTIFICATIONS",
                    cerfTilte1: "Certification: html/css",
                    cerfTilte2: "Certification: JS Development",
                    cerfTilte3: "Certification: React Development",
                    cerfTilte4: "Certification: Advanced Devops",
                    cerfTilte5: "Download",

                    contacts: "Interested?",
                    contactsTitle1: "Then let's talk!",
                    contactsTitle2: "My Socials",

                    screen: "Screenshots",
                },
            },
            en: {
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

                    about: "Про мене",
                    aboutTitle1: "Вітаю! Я - Назар Рожаловський",
                    aboutDesc1: "Fullstack-розробник з двома роками досвіду на REACT AND NODE.JS (NEST.JS)",
                    aboutTitle2: "Перед кар'єрою",
                    aboutDesc2: "Мій шлях розпочався з різноманітних IT курсів, де я відкрив для себе дизайн та веб-проекти. Я опанував основи створення макетів, розробки невеликих сайтів та веб-архітектури",
                    aboutTitle3: "Мої веб-додатки -  aMessage",
                    aboutDesc3: "Розроблений у 2026 році. Месенджер з WebSocket та наскрізним шифруванням від Libsodium. Дозволяє вам безпечно спілкуватися. Використовує аутентифікацію від вашого Google або GitHub",
                    aboutTitle4: "Мої веб-додатки -  Anote",
                    aboutDesc4: "Розроблений у 2024 році. Перший проєкт автора. Застосунок для нотаток на react та nest.js. Використовує аутентифікацію від вашого Google або GitHub",
                    aboutTitle5: "JS розробка - SoftServe Academy",
                    aboutDesc5: "У 2024 році я закінчив інтенсивний курс з HTML (CSS) та JavaScript у SoftServe Academy. Брав участь у командних проєктах SoftServe та розробляв малі додатки",
                    aboutTitle6: "Node.js розробка - особистий досвід",
                    aboutDesc6: "У 2024 році створив особистий застосунок для нотаток на базі React та Nest.js",
                    aboutTitle7: "devops та бази даних - SoftServe Academy",
                    aboutDesc7: "У 2024–2025 роках я пройшов шестимісячний командний курс з DevOps та баз даних від SoftServe. Я продовжував працювати над власними проєктами та особистими розробками",
                    aboutTitle8: "react-сертифікція - SoftServe Academy",
                    aboutDesc8: "Отримавши вагомий досвід в розробці, я продовжив працювати над отриманням сертифікацій від SoftServe. Влітку 2025 року я отримав сертифікат react-розробника",
                    aboutTitle9: "не зупиняюсь!",
                    aboutDesc9: "Я продовжую ретельно вивчати та застосовувати нові практики у веб-розробці. Я завжди готовий впроваджувати найновіші та найінноваційніші рішення",

                    mess: "Мій Месенджер",
                    messTitle1: "Месенджер з WebSocket та наскрізним шифруванням від Libsodium. Дозволяє вам безпечно спілкуватися",
                    messDesc1: "лінк",
                    messDesc2: "на github",
                    messTitle2: "Використані технології",
                    messTitle3: "Хостинг",
                    messDesc3: "Фронтенд розміщений на Vercel. Бекенд працює на Render та Supabase. Додаток доступний 24/7",

                    note: "Мій нотатник",
                    noteTitle1: "Перший проєкт автора. Застосунок для нотаток на react та nest.js",
                    notesDesc2: "на github",
                    notesTitle2: "Використані технології",

                    cerf: "Мої сертифікації",
                    cerfTilte1: "Сертифікат: html/css",
                    cerfTilte2: "Сертифікат: JS Development",
                    cerfTilte3: "Сертифікат: React Development",
                    cerfTilte4: "Сертифікат: Advanced Devops",
                    cerfTilte5: "Завантажити",

                    contacts: "Зацікавлені?",
                    contactsTitle1: "Тоді нумо спілкуватися!",
                    contactsTitle2: "Мої соцмережі",

                    screen: "Скріншоти",
                },
            },
        },
    });

i18n.on("languageChanged", (lng) => {
    localStorage.setItem("lang", lng);
});

export default i18n;