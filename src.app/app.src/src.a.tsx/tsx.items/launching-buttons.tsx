import { useNavigate } from 'react-router-dom';
import GoogleIcon from "../tsx.extensions/assets/google.pic";
import GithubIcon from "../tsx.extensions/assets/github.pic";

export const RenderingButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page__button-container">

      <div className="login-page__button" onClick={() => { navigate("/amessage") }}>
        <div className="login-page__button--title">
          <div className="login-page__button--title-text">
            MESSAGING APP
          </div>
          <svg viewBox="0 0 24 24" className="login-page__button--icon">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
        <div style={{ opacity: 0.8 }}>
          <GoogleIcon />
        </div>
      </div>
      <div className="login-page__button" onClick={() => { navigate("/anote") }}>
        <div className="login-page__button--title">
          <div className="login-page__button--title-text">
            Notebook
          </div>
          <svg viewBox="0 0 24 24" className="login-page__button--icon">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
        <div style={{ opacity: 0.8 }}>
          <GithubIcon />
        </div>
      </div>
      <div className="login-page__button" onClick={() => { navigate("/certifications") }}>
        <div className="login-page__button--title">
          <div className="login-page__button--title-text">
            certificates
          </div>
          <svg viewBox="0 0 24 24" className="login-page__button--icon">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>

    </div >
  );
};