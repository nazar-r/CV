import { RenderingButtons } from "../tsx.items/launching-buttons";
import { Menu } from '../tsx.items/items.menu/menu';

const ProjectsPageContent = () => (
    <div className="projects-page">
        <div className="projects-page__title">Explore my projects!</div>
        <RenderingButtons />
        <Menu />
    </div>
);

export default ProjectsPageContent;