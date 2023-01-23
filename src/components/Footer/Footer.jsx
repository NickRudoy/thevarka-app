import React from "react";
import "./footer.css"
import {
  UilTelegramAlt,
  UilWhatsapp,
  UilInstagram,
} from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <div className="footer__social">
            <div className="footer__social-link">
              <a href="" className="footer__social-icon">
                <UilTelegramAlt />{" "}
              </a>
              <a href="" className="footer__social-icon">
                <UilWhatsapp />{" "}
              </a>
              <a href="" className="footer__social-icon">
                <UilInstagram />{" "}
              </a>
            </div>
            <div className="footer__social-phone">
              <p>+7 (495) 856-23-46</p>
            </div>
          </div>
          <div className="footer__info">
            <p className="footer__title">Покупателю</p>
            <ul>
              <li>
                <a href="" className="footer__link">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="" className="footer__link">
                  Обмен и возврат
                </a>
              </li>
              <li>
                <a href="" className="footer__link">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__mailing">
            <p className="footer__title">Подписаться на рассылку</p>
            <form action="">
                <div className="footer__form">
                <input
                type="text"
                name="user_email"
                className="footer__form-input"
                placeholder="Ник в инстаграм"
              />
                </div>
                <button className="button button--flex footer__button">
                Подписаться
            </button>
            </form>
          </div>
        </div>
        <div className="footer__right">
            <p>©The varka 2022 Все права защищены</p>
            <p>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
