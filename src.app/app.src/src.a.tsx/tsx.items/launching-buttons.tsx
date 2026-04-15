import { useNavigate } from 'react-router-dom';

export const RenderingButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-page__button-container">
      <div className="projects-page__button" onClick={() => { navigate("/amessage") }}>
          <div className="projects-page__button--title-text">Messaging App</div>
          <svg viewBox="0 0 24 24" className="projects-page__button--icon">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
      </div>

      <div className="projects-page__button" onClick={() => { navigate("/anote") }}>
          <div className="projects-page__button--title-text">Notes App</div>
          <svg viewBox="0 0 24 24" className="projects-page__button--icon">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
      </div>

      <div className="projects-page__button" onClick={() => { navigate("/certifications") }}>
          <div className="projects-page__button--title-text">My Certificates</div>
          <svg viewBox="0 0 24 24" className="projects-page__button--icon">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
      </div>
    </div>
  );
};