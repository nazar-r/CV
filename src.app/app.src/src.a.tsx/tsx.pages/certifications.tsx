import { useState } from 'react';
import { useOneOnOneRoom } from "../../src.a.chats/ws.chats";
import { useLocation } from "react-router-dom";
import { Menu } from '../tsx.items/items.menu/menu';

import { useNavigate } from 'react-router-dom';

const LobbyPageContent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const peerWsId = location.state?.peerWsId || "";
    const { messages, isPeerOnline, sendMessage, removeMessage, updateMessage } = useOneOnOneRoom({ peerWsId });
    const [defEdit, setEdit] = useState(false);
    const [text, setText] = useState("");

    const switchEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        setEdit(prev => !prev);
    };

    const handleSubmit = () => {
        if (!text.trim()) return;
        sendMessage({ messageStatus: "mine", messageId: "", content: text });
        setText("");
    };

    return (
        <>
            <div className="login-page">
                <div className="login-page__title">MY SERTIFICATIONS</div>
                <div className="login-page__title__heading">    </div>
                <ul className="menu-content__item--list">
                    <li className="login-page__item--list-item">
                        <div>
                            <div className="login-page__item--list-item__heading">Here are my reults of 1.5 years of participation in a team-based SoftServe courses</div>
                            <div className="login-page__item--list-item__title">sroll below
                                <svg viewBox="0 0 24 24" style={{ transform: "rotate(90deg)", margin: "0 0 -5px 6px" }} className="login-page__button--icon">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg></div>
                        </div>
                    </li>
                    <li className="login-page__item--list-item">
                        <div>
                            <div className="login-page__item--list-item__heading">Certification: html/css</div>
                            <a href='/Certificate-htmlcss.pdf' download="rozhalovsky/html/css.pdf" className='login-page__button-hidden--item'>Download</a>
                        </div>
                    </li>
                    <li className="login-page__item--list-item">
                        <div>
                            <div className="login-page__item--list-item__heading">Certification: JS Development</div>
                            <a href='/Certificate-JS.pdf' download="rozhalovsky/js.pdf" className='login-page__button-hidden--item'>Download</a>
                        </div>
                    </li>
                    <li className="login-page__item--list-item">
                        <div>
                            <div className="login-page__item--list-item__heading">Certification: React Development</div>
                              <a href='/Certificate-React.pdf' download="rozhalovsky/react.pdf" className='login-page__button-hidden--item'>Download</a>

                        </div>
                    </li>
                    <li className="login-page__item--list-item">
                        <div>
                            <div className="login-page__item--list-item__heading">Certification: Advanced Devops</div>
                            <a href='/devops.pdf' download="rozhalovsky/devops.pdf" className='login-page__button-hidden--item'>Download</a> 
                        </div>
                    </li>
                </ul >
                <Menu />
            </div >
        </>
    );
};

export default LobbyPageContent;