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
                <div className="login-page__title">THE AMESSAGE</div>
                <ul className="menu-content__item--list">
                    <li className="login-page__item--list-item">
                        <div>
                            <div className="login-page__item--list-item__heading">A WebSocket-based messenger with end-to-end encryption from Libsodium</div>
                            <div className="login-page__item--list-item__title--container">
                                <div className="login-page__item--list-item__title-2">
                                    <a href="https://amessage.site" className="login-page__item--list-item__title-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 6px -2px 0" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                                        link</a>
                                    <div className="login-page__item--list-item__title--child">NOTE: The first launch may take up to 50 seconds for the server to start.</div>
                                </div>
                                <a href="https://github.com/nazar-r/aMessage" className="login-page__item--list-item__title-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 6px -2px 0" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                                    on gihtub</a>
                                <div className="login-page__item--list-item__title" style={{ margin: "15px 0px 0 90px" }}>sroll below
                                    <svg viewBox="0 0 24 24" style={{ transform: "rotate(90deg)", margin: "0 0 -5px 6px" }} className="login-page__button--icon">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg></div>
                            </div>
                        </div>
                    </li>
                    <li className="login-page__item--list-item">
                        <div>
                            <div className="login-page__item--list-item__heading">technologies used</div>
                            <div className="login-page__item--list-item__title">Typescript, react, react router, react query, nestjs (on express), jwt Authentication, prisma orm, postgresql, redis, socket.io, libsodium encryption library</div>

                        </div>
                    </li>
                    <li className="login-page__item--list-item">
                        <div>
                            <div className="login-page__item--list-item__heading">hosted on</div>
                            <div className="login-page__item--list-item__title">the frontend is hosted on Vercel. The backend is on Render and Supabase. The app is available 24/7</div>
                        </div>
                    </li>
                </ul >
                <Menu />
            </div >
        </>
    );
};

export default LobbyPageContent;