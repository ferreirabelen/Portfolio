import { Nav, ButtonHamburger, Select } from "../Styles/NavComponent";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import { LenguageContext } from "../Components/Context/LenguageContext";

function NavBar() {
    const { state, dispatch } = useContext(LenguageContext);
    const toggleLanguage = () => {
        dispatch({ type: "lenguage" });
    };

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen); // Alternar entre abrir y cerrar el menú
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false); // Cierra el menú al hacer clic en un elemento del menú
    };

    return (
        <Nav isMenuOpen={isMenuOpen}>
            <ul>
                {state.lenguage ? (
                    <>
                        <li onClick={handleMenuItemClick}>
                            <a href="#sobremi">︽ Sobre mí</a>
                        </li>
                        <li onClick={handleMenuItemClick}>
                            <a href="#skills">♢ Skills</a>
                        </li>
                        <li onClick={handleMenuItemClick}>
                            <a href="#proyectos">❃ Proyectos</a>
                        </li>
                        <Select onChange={toggleLanguage}>
                            <>
                                <option value="EN">EN</option>
                                <option value="ES">ES</option>
                            </>
                        </Select>
                    </>
                ) : (
                    <>
                        <li onClick={handleMenuItemClick}>
                            <a href="#sobremi">︽ About Me</a>
                        </li>
                        <li onClick={handleMenuItemClick}>
                            <a href="#skills">♢ Skills</a>
                        </li>
                        <li onClick={handleMenuItemClick}>
                            <a href="#proyectos">❃ Projects</a>
                        </li>
                        <Select onChange={toggleLanguage}>
                            <>
                                <option value="ES">ES</option>
                                <option value="EN">EN</option>
                            </>
                        </Select>
                    </>
                )}
            </ul>
            <ButtonHamburger onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} />
            </ButtonHamburger>
        </Nav>
    );
}

export default NavBar;

