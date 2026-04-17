import { useEffect, useRef, useState } from 'react';
import { Menu } from '../tsx.items/items.menu/menu';

const certificationsPageContent = () => {
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
                <div className="projects-page__title">My CERTIFICATIONS</div>
                <div className="projects-page__title__heading"></div>
                <ul className="menu-content__item--list" ref={listRef}>
                    <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                        <div>
                            <div className="projects-page__item--list-item__heading">Certification: html/css</div>
                            <a href='/Certificate-htmlcss.pdf' download="rozhalovsky/html/css.pdf" className='projects-page__button-hidden--item'>Download
                                <svg viewBox="0 0 24 24" className="projects-page__button--icon-1" style={{ margin: "0 0 -6.5px 2px", transform: 'rotate(90deg)' }}>
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    </li>
                    <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                        <div>
                            <div className="projects-page__item--list-item__heading">Certification: JS Development</div>
                            <a href='/Certificate-JS.pdf' download="rozhalovsky/js.pdf" className='projects-page__button-hidden--item'>Download</a>
                            <svg viewBox="0 0 24 24" className="projects-page__button--icon-1" style={{ opacity: "0.8", margin: "0 0 -6.5px 2px", transform: 'rotate(90deg)' }}>
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </div>
                    </li>
                    <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                        <div>
                            <div className="projects-page__item--list-item__heading">Certification: React Development</div>
                            <a href='/Certificate-React.pdf' download="rozhalovsky/react.pdf" className='projects-page__button-hidden--item'>Download
                                <svg viewBox="0 0 24 24" className="projects-page__button--icon-1" style={{ margin: "0 0 -6.5px 2px", transform: 'rotate(90deg)' }}>
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    </li>
                    <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                        <div>
                            <div className="projects-page__item--list-item__heading">Certification: Advanced Devops</div>
                            <a href='/devops.pdf' download="rozhalovsky/devops.pdf" className='projects-page__button-hidden--item'>Download
                                <svg viewBox="0 0 24 24" className="projects-page__button--icon-1" style={{ margin: "0 0 -6.5px 2px", transform: 'rotate(90deg)' }}>
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul >
                <Menu />
            </div >
        </>
    );
};

export default certificationsPageContent;