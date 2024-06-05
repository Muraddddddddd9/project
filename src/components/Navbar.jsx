import { Logo } from "../assets/logo";

const Navbar = () => {
    return (
        <nav>
            <logo />
            <ul>
                <li>
                    <Logo /> ООО "ТелеСистем"</li>
                <li>Инфа</li>
                <li>Компании</li>
                <li>Сети</li>
            </ul>
        </nav>
    );
}

export default Navbar;
