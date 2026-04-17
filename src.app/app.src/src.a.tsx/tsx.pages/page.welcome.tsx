import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18n from "../tsx.items/language.config"

const WelcomePageContent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const lang = i18n.language || "en";
    i18n.changeLanguage(lang === "en" ? "ua" : "en");
  };

  return (
    <div className="welcome-page">
      <div className="welcome-page-container">
        <div className="welcome-page-container__title">{t("welcome")}</div>
        <div className="welcome-page-container__description">{t("welcomeTitle")}</div>
      </div>

      <div className="welcome-page__button" onClick={() => { navigate("/projects") }}>
        <div className="welcome-page__button--title">{t("welcomeButton")}</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="welcome-page__button--icon">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
      {/* <div className="welcome-page__button-switch">
        <div className="welcome-page__button-switch--title"onClick={toggleLanguage}> {(i18n.language ?? "en").toUpperCase()}</div>
      </div> */}
    </div>
  );
};

export default WelcomePageContent;