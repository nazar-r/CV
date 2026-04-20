import { useEffect, useRef, useState } from 'react';
import { Menu } from '../tsx.items/items.menu/menu';
import { useTranslation } from "react-i18next";

const LobbyPageContent = () => {
    const { t } = useTranslation();
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
            behavior: 'smooth',
            block: 'start',
        });
    }, [index]);

    return (
        <div className="projects-page">
            <div className="projects-page__title">{t("about")}</div>
            <ul ref={listRef} className="menu-content__item--list">
                <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="projects-page__item--list-item__heading">{t("aboutTitle1")}</div>
                        <div className="projects-page__item--list-item__title">{t("aboutDesc1")} </div>
                    </div>
                </li>

                <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="projects-page__item--list-item__heading">{t("aboutTitle2")}</div>
                        <div className="projects-page__item--list-item__title">{t("aboutDesc2")}</div>
                    </div>
                </li>

                <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="projects-page__item--list-item__heading">{t("aboutTitle3")}</div>
                        <div className="projects-page__item--list-item__title">{t("aboutDesc3")}</div>
                    </div>
                </li>

                <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="projects-page__item--list-item__heading">{t("aboutTitle4")}</div>
                        <div className="projects-page__item--list-item__title">{t("aboutDesc4")}</div>
                    </div>
                </li>

                <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="projects-page__item--list-item__heading">{t("aboutTitle5")}</div>
                        <div className="projects-page__item--list-item__title">{t("aboutDesc5")}</div>
                    </div>
                </li>

                <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="projects-page__item--list-item__heading">{t("aboutTitle6")}</div>
                        <div className="projects-page__item--list-item__title">{t("aboutDesc6")}</div>
                    </div>
                </li>

                <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="projects-page__item--list-item__heading">{t("aboutTitle7")}</div>
                        <div className="projects-page__item--list-item__title">{t("aboutDesc7")}</div>
                    </div>
                </li>

                <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="projects-page__item--list-item__heading">{t("aboutTitle8")}</div>
                        <div className="projects-page__item--list-item__title">{t("aboutDesc8")}</div>
                    </div>
                </li>

                <li className="projects-page__item--list-item" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onClick={() => setPaused(true)}>
                    <div>
                        <div className="projects-page__item--list-item__heading">{t("aboutTitle9")}</div>
                        <div className="projects-page__item--list-item__title">{t("aboutDesc9")}</div>
                    </div>
                </li>

            </ul>

            <Menu />
        </div>
    );
};

export default LobbyPageContent;