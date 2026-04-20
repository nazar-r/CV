import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const RenderingButtons = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="projects-page__button-container">
      <div className="projects-page__button" onClick={() => { navigate("/amessage") }}>
        <div className="projects-page__button--title-text">{t("projectsTitle1")}</div>
        <svg viewBox="0 0 24 24" className="projects-page__button--icon">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>

      <div className="projects-page__button" onClick={() => { navigate("/anote") }}>
        <div className="projects-page__button--title-text">{t("projectsTitle2")}</div>
        <svg viewBox="0 0 24 24" className="projects-page__button--icon">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>

      <div  style={{ fontSize: "14.5px"}} className="projects-page__button" onClick={() => { navigate("/certifications") }}>
        <div className="projects-page__button--title-text">{t("projectsTitle3")}</div>
        <svg viewBox="0 0 24 24" className="projects-page__button--icon">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </div>
  );
};