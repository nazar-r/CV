import { useState, useEffect } from "react";
import { ChatsList } from "./menu.chats.list";
import { ContactsList } from "./menu.contacts.list";
import { SettingsPage } from "./menu.settings";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Menu = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [defMenu, setMenu] = useState(false);
    const [defMenuItems, setMenuItems] = useState<"chats" | "contacts" | "settings" | null>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1250);
    const [isMobileHeight, setIsMobileHeight] = useState(window.innerHeight <= 720);

    const switchMenu = () => setMenu(prev => !prev);

    const closeMenu = () => {
        setMenu(false);
        setMenuItems(null);
    };

    const closeOrSwitchMenu = () => {
        defMenuItems ? closeMenu() : setMenu(prev => !prev);
    };

    const openMenuItem = (item: "chats" | "contacts" | "settings") => {
        setMenuItems(item);
    };

    useEffect(() => {
        const resizedPage = () => setIsMobile(window.innerWidth <= 1250);
        window.addEventListener("resize", resizedPage);
        return () => window.removeEventListener("resize", resizedPage);
    }, []);

    const menuContent =
        defMenuItems === "chats"
            ? <ChatsList />
            : defMenuItems === "contacts"
                ? <ContactsList />
                : defMenuItems === "settings"
                    ? <SettingsPage />
                    : null;

    const menuItems = (
        <>
            <div className={`menu-container__item ${isMobile && defMenuItems ? "chat-message--fade" : ""}`} style={{ transitionDelay: isMobile && defMenuItems ? "0.2s" : "0s" }} onClick={() => { navigate("/about"); closeMenu(); }}>{t("menuTitle1")}</div>

            <div className={`menu-container__item ${isMobile && defMenuItems ? "chat-message--fade" : ""}`} style={{ transitionDelay: isMobile && defMenuItems ? "0.2s" : "0s" }} onClick={() => { navigate("/projects"); closeMenu(); }}>{t("menuTitle2")}</div>

            <div className={`menu-container__item ${isMobile && defMenuItems ? "chat-message--fade" : ""}`} style={{ transitionDelay: isMobile && defMenuItems ? "0.2s" : "0s" }} onClick={() => { navigate("/contacts"); closeMenu(); }}>{t("menuTitle3")}</div>
        </>
    );

    return (
        <>
            {defMenu && (
                <div className="menu">
                    <div className="menu-content" onClick={closeMenu}>
                        {menuContent}
                    </div>
                </div>
            )}

            <div
                className="menu-container"
                style={{
                    bottom: defMenu ? (isMobile ? "23vh" : "15vh") : (isMobileHeight ? "7vh" : "9vh")
                }}
            >
                {!isMobile ? (
                    <div className="menu-button" onClick={switchMenu} style={{ fontSize: defMenu ? 19 : (isMobileHeight ? 17 : 19) }}>
                        {t("menu")}
                    </div>
                ) : null}

                {defMenu && (isMobile ? (!defMenuItems ? menuItems : null) : menuItems)}

                {isMobile ? (
                    <div className="menu-button" onClick={closeOrSwitchMenu} style={{ fontSize: defMenu ? 19 : (isMobileHeight ? 17 : 19) }}>
                        {t("menu")}
                    </div>
                ) : null}
            </div>
        </>
    );
};