import { useEffect, useRef, useState } from 'react';
import { Menu } from '../tsx.items/items.menu/menu';

const LobbyPageContent = () => {
    const listRef = useRef<HTMLUListElement | null>(null);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                setIndex((prev) => prev + 1);
            }
        }, 3800);

        return () => clearInterval(interval);
    }, [paused]);

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;

        const items = list.children;
        if (items.length === 0) return;

        const nextIndex = index % items.length;
        const element = items[nextIndex] as HTMLElement;

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, [index]);

    return (
        <div className="login-page">
            <div className="login-page__title">My Journey</div>

            <ul ref={listRef} className="menu-content__item--list">

                <li className="login-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="login-page__item--list-item__heading">HI! i am nazar rozhalovsky</div>
                        <div className="login-page__item--list-item__title">
                            Fullstack web developer with 2+ years of experience with REACT AND NODE.JS (NEST.JS)
                        </div>
                    </div>
                </li>

                <li className="login-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="login-page__item--list-item__heading">before</div>
                        <div className="login-page__item--list-item__title">
                            My journey began at various it courses, where I discovered it through design and web projects. I learned the fundamentals of developing mockups, building small sites and web architecture.
                        </div>
                    </div>
                </li>

                <li className="login-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="login-page__item--list-item__heading">My apps - the aMessage</div>
                        <div className="login-page__item--list-item__title">
                            Designed in 2026. A WebSocket-based messenger with end-to-end encryption from Libsodium. Allows you to chat securely. used google and github Authentication
                        </div>
                    </div>
                </li>

                <li className="login-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="login-page__item--list-item__heading">My apps - the Anote</div>
                        <div className="login-page__item--list-item__title">
                            Designed in 2024. the first author's project. notes web application with crud based on react and nest.js. used google and github Authentication
                        </div>
                    </div>
                </li>

                <li className="login-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="login-page__item--list-item__heading">JS Development - SoftServe Academy</div>
                        <div className="login-page__item--list-item__title">
                            In 2024 i Completed an intensive html (css) and JavaScript program at SoftServe Academy. participated in softserve team projects and developed apps.
                        </div>
                    </div>
                </li>

                <li className="login-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="login-page__item--list-item__heading">Node.js Development - personal experience</div>
                        <div className="login-page__item--list-item__title">
                            in 2024 Development of my personal notes app based on React and Nest.js has begun
                        </div>
                    </div>
                </li>

                <li className="login-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="login-page__item--list-item__heading">devops AND databases - SoftServe Academy</div>
                        <div className="login-page__item--list-item__title">
                            In 2024-2025 I completed a six-month team-based courses in DevOps and databases. I continued working on designs and personal projects.
                        </div>
                    </div>
                </li>

                <li className="login-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="login-page__item--list-item__heading">react sertificate - SoftServe Academy</div>
                        <div className="login-page__item--list-item__title">
                            Having gained solid development experience, I continued working on certifications at SoftServe. In the summer of 2025, I received a softserve certificate of react developer
                        </div>
                    </div>
                </li>

                <li className="login-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="login-page__item--list-item__heading">keep moving!</div>
                        <div className="login-page__item--list-item__title">
                            I continue to thoroughly explore and use new practices in web development. I am always ready to implement the latest and most innovative solutions.
                        </div>
                    </div>
                </li>

            </ul>

            <Menu />
        </div>
    );
};

export default LobbyPageContent;