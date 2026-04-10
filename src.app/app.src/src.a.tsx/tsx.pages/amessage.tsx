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
        }, 5000);

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
            behavior: "smooth",
            block: "start",
        });
    }, [index]);

    return (
        <>
            <div className="login-page">
                <div className="login-page__title">THE AMESSAGE</div>

                <ul ref={listRef} className="menu-content__item--list">

                    <li className="login-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                        <div>
                            <div className="login-page__item--list-item__heading">
                                A WebSocket-based messenger with end-to-end encryption from Libsodium
                            </div>

                            <div className="login-page__item--list-item__title--container">
                                <div className="login-page__item--list-item__title-2">

                                    <a href="https://amessage.site" className="login-page__item--list-item__title-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 6px -2px 0" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                        </svg>
                                        link
                                    </a>

                                    <div className="login-page__item--list-item__title--child">
                                        NOTE: The first launch may take up to 50 seconds for the server to start.
                                    </div>

                                </div>

                                <a href="https://github.com/nazar-r/aMessage" className="login-page__item--list-item__title-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 6px -2px 0" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                    </svg>
                                    on github
                                </a>

                            </div>
                        </div>
                    </li>

                    <li className="login-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                        <div>
                            <div className="login-page__item--list-item__heading">
                                technologies used
                            </div>

                            <div className="login-page__item--list-item__title">
                                Typescript, react, react router, react query, nestjs (on express), jwt Authentication, prisma orm, postgresql, redis, socket.io, libsodium encryption library
                            </div>
                        </div>
                    </li>

                    <li className="login-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                        <div>
                            <div className="login-page__item--list-item__heading">
                                hosted on
                            </div>

                            <div className="login-page__item--list-item__title">
                                the frontend is hosted on Vercel. The backend is on Render and Supabase. The app is available 24/7
                            </div>
                        </div>
                    </li>

                </ul>

                <Menu />
            </div>
        </>
    );
};

export default LobbyPageContent;