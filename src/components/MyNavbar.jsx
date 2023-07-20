import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (

    <div className="menu-nav d-block d-lg-none">
        
      <nav className="nav-burger d-flex justify-content-end">
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <nav className="nav-items">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/about">A propos de moi</NavLink>
        <NavLink to="/skills">Mes compétences</NavLink>
        <NavLink to="/projects">Mes projets réalisés</NavLink>
        <NavLink to="/contact">Contactez-moi !</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default MyNavbar;
