import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [currentPage, setCurrentPage] = useState("home");

    function changeCurrentPage(page) {
        setCurrentPage(page);
    }

    return (
        <header className="header">
            <h1 className="header__logo">Socratic Soul</h1>
            <nav className="navbar">
                <Link 
                    to={"/"} 
                    className={`navbar__link navbar__link--home ${currentPage === "home" &&  "navbar__link--active"}`}
                    onClick={() => changeCurrentPage("home")}
                >
                    <p className="navbar__text">Home</p>
                </Link>
                <Link 
                    to={"/self-reflection"} 
                    className={`navbar__link navbar__link--self-reflection ${currentPage === "self-reflection" &&  "navbar__link--active"}`}
                    onClick={() => changeCurrentPage("self-reflection")}
                >
                    <p className="navbar__text">Reflect</p>
                </Link>
                <Link 
                    to={"/self-expression"} 
                    className={`navbar__link navbar__link--self-expression ${currentPage === "self-expression" &&  "navbar__link--active"}`}
                    onClick={() => changeCurrentPage("self-expression")}
                >
                    <p className="navbar__text">Express</p>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
