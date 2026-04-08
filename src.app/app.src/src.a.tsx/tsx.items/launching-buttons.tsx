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
      <div className="login-page__button-1">
        <div className="login-page__button--title">
          <div className="login-page__button--title-text">
            certificates
          </div>
          <svg viewBox="0 0 24 24" className="login-page__button--icon">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
        <div className='login-page__button-hidden'>
          <a href='/Certificate-htmlcss.pdf' download="rozhalovsky/html/css.pdf" className='login-page__button-hidden--item'>html/css</a>
          <a href='/Certificate-JS.pdf' download="rozhalovsky/js.pdf" className='login-page__button-hidden--item'>JS</a>
          <a href='/Certificate-React.pdf' download="rozhalovsky/react.pdf" className='login-page__button-hidden--item'>react</a>
          <a href='/devops.pdf' download="rozhalovsky/devops.pdf" className='login-page__button-hidden--item'>devops</a>
        </div>
      </div>

    </div >
  );
};