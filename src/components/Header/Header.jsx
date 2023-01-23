import React, { useState } from "react";
import {
  UilSearch,
  UilUser,
  UilHeart,
  UilShoppingBasket,
  UilTimes,
  UilBars,
} from "@iconscout/react-unicons";
import "./header.css";
import Logo from "../../assets/Logo.png";

const Header = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <header className="header">
      <div className="header__nav-menu container grid">
        <div className="header__nav-one">
          <a href="#home" className="header__nav-icon">
            <UilSearch />
          </a>
          <a href="#home" className="header__nav-icon">
            <UilUser />
          </a>
        </div>
        <div className="header__nav-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="header__nav-two">
          <a href="#home" className="header__nav-icon">
            <UilHeart />
          </a>
          <a href="#home" className="header__nav-icon">
            <UilShoppingBasket />
          </a>
          <div className="nav__toggle"  onClick={() => setToggle(!toggle)}>
          <UilBars />
        </div>
        </div>
      </div>
      <nav className="nav container">
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#about" className="nav__link">
                О нас
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Каталог
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Бестселлеры
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Сертификаты
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Доставка и оплата
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Контакты
              </a>
            </li>
            <UilTimes className="nav__close" onClick={() => setToggle(!toggle)}/>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
