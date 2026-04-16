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
        }, 2400);

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
            <div className="projects-page">
                <div className="projects-page__title">Interested?</div>
                <div className="projects-page__title__heading">Then let's talk!</div>
                <ul ref={listRef} className="menu-content__item--list">
                    {/* <li className="projects-page__item--list-item-1" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                        <form id="contact-form" action="https://forminit.com/f/dmq045juc0x" method="POST" className="projects-page__item--list-item__field--container">
                            <input type="text" name="fi-sender-fullName" placeholder="your name" className="projects-page__item--list-item__title--field" required />
                            <input type="email" name="fi-sender-email" placeholder="your email" className="projects-page__item--list-item__title--field" required />
                            <textarea name="fi-text-message" placeholder="your message" className="projects-page__item--list-item__title--field" required></textarea>
                        </form>

                        <button type="submit" form="contact-form" className="projects-page__item--list-item__title--button">
                            <div>Send</div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="projects-page__button--icon-1">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </li> */}

                    <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
       
                            <div className="projects-page__item--list-item__heading">My Socials</div>
                            <div className="projects-page__item--list-item__title-2">
                                <a href="https://t.me/nazar_rr" className="projects-page__item--list-item__title-1">Telegram</a>
                                <a href="https://www.linkedin.com/in/nazar-rozhalovsky-214082283"  className="projects-page__item--list-item__title-1">LinkedIn</a>
                                <a href="https://github.com/nazar-r/aNote" className="projects-page__item--list-item__title-1">Github</a>
                            </div>

                    </li>

                </ul>

                <Menu />
            </div>
        </>
    );
};

export default LobbyPageContent;