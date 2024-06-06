import { Logo } from "../assets/logo";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <div style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "20px"
                    }}>
                        <Logo />
                        ООО "ТелеСистем"
                    </div>
                </li>
                <div style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "20px"
                }}>
                    <li>Инфа</li>
                    <li>Компании</li>
                    <li>Сети</li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
