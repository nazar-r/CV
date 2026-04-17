import { RenderingButtons } from "../tsx.items/launching-buttons";
import { Menu } from '../tsx.items/items.menu/menu';
import { useTranslation } from "react-i18next";

const ProjectsPageContent = () => {
    const { t } = useTranslation();

    return (

        <div className="projects-page">
            <div className="projects-page__title">{t("projects")}</div>
            <RenderingButtons />
            <Menu />
        </div>
    )
}

export default ProjectsPageContent;