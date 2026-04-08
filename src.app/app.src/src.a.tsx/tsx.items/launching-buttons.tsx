import * as types from "../tsx.extensions/types";
import { authFetching } from "../tsx.extensions/fetching/fetching";
import GoogleIcon from "../tsx.extensions/assets/google.pic";
import GithubIcon from "../tsx.extensions/assets/github.pic";
import { useState, useEffect } from "react";

const buttons: types.ButtonConfig[] = [
  { key: "google", label: "MESSAGING APP", icon: GoogleIcon },
  { key: "github", label: "Notebook", icon: GithubIcon },
];

export const RenderingButtons = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1250);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1250);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="login-page__button-container">
      {buttons.map((item) => (
        <div key={item.key} className="login-page__button">
          <div className="login-page__button--title">
            <div className="login-page__button--title-text">
              {item.label}
            </div>
            <svg viewBox="0 0 24 24" className="login-page__button--icon">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>

          {!isMobile && <item.icon />}
        </div>
      ))}
    </div>
  );
};