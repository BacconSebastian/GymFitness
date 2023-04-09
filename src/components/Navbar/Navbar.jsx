import { useState } from "react";

import Brandmark from "../Brandmark/Brandmark";

import NavbarMobile from "../../assets/Navbar/nav-mobile.svg";
import CloseMenu from "../../assets/shared/close-menu.svg";

import "./Navbar.scss";

const Navbar = ({ navbarStyle, headNavbar }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav id="head-navbar" className="navbar">
      <div className="web">
        <Brandmark />
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#informacion">Información</a></li>
          <li><a href="#planes">Planes</a></li>
        </ul>
      </div>
      <div className="mobile">
        <Brandmark />
        <img
          className={mobileMenu ? "close enable" : "close"}
          src={CloseMenu}
          alt=""
          onClick={() => handleMobileMenu()}
        />
        <img
          className={mobileMenu ? "open" : "open enable"}
          src={NavbarMobile}
          alt=""
          onClick={() => handleMobileMenu()}
        />
        <div className={mobileMenu ? "mobile-menu enable" : "mobile-menu"}>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
