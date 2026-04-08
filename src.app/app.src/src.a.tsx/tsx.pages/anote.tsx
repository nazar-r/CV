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
                <div className="login-page__title">THE Anote</div>
                <ul className="menu-content__item--list">
                    <li className="login-page__item--list-item">
                        <div>
                            <div className="login-page__item--list-item__heading"> the first author's project. notes web application with crud based on react and nest.js</div>
                            <div className="login-page__item--list-item__title">
                                <a href="https://github.com/nazar-r/aNote" className="login-page__item--list-item__title-1">look on gihtub</a>
                            </div>
                        </div>
                    </li>
                    <li className="login-page__item--list-item">
                        <div>
                            <div className="login-page__item--list-item__heading">technologies used</div>
                            <div className="login-page__item--list-item__title">Typescript, react, react router, react query, nestjs (on express), jwt Authentication, prisma orm, postgresql</div>

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