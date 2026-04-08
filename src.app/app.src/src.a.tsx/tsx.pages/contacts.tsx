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
                <div className="login-page__title">got interested?</div>
                <div className="login-page__title__heading">contact me and i wIll answer you soon</div>
                <ul className="menu-content__item--list">
                    <li className="login-page__item--list-item">
                        <form id="contact-form" action="https://forminit.com/f/dmq045juc0x" method="POST" className="login-page__item--list-item__field">
                            <input type="text" name="fi-sender-fullName" placeholder="your name" className="login-page__item--list-item__title--field" required />
                            <input type="email" name="fi-sender-email" placeholder="your email" className="login-page__item--list-item__title--field" required />
                            <textarea name="fi-text-message" placeholder="your message" className="login-page__item--list-item__title--field" required></textarea>
                        </form>
                        <button type="submit" form="contact-form" className="login-page__item--list-item__title--button">

                            <div>Send</div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="login-page__button--icon-1">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </li>
                    <li className="login-page__item--list-item">
                        <div>
                            <div className="login-page__item--list-item__heading">My Socials</div>
                                    <div className="login-page__item--list-item__title-2">
                            <a href="https://github.com/nazar-r/aNote" className="login-page__item--list-item__title-1">Telegram</a>
                            <a href="https://github.com/nazar-r/aNote" className="login-page__item--list-item__title-1">Github</a>
                        </div>
                        </div>
                    </li>         
                </ul >
                <Menu />
            </div >
        </>
    );
};

export default LobbyPageContent;