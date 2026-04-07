import { RenderingButtons } from "../tsx.items/launching-buttons";
import { Menu } from '../tsx.items/items.menu/menu';

const LoginPageContent = () => (
    <div className="login-page">
        <div className="login-page__title">Explore the projects!</div>
        <RenderingButtons />
             <Menu />
    </div>
);

export default LoginPageContent;