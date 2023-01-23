import React from "react";
import "./coupon.css";
import Form from "./Form";
import Coupon1 from "../../assets/coupon1.png"
import Coupon2 from "../../assets/coupon2.png"


const Coupon = () => {
  return (
    <section className="coupon section">
      <div className="coupon__container container grid">
        <div className="coupon__text">
          <h2 className="section__title coupon__title">купон на скидку 10%</h2>
          <p className="section__subtitle coupon__subtitle">
            При подписке на наш инстаграм, дарим промокод 10% на покупку свечей
            онлайн
          </p>
          <a href="#home" className="coupon__link">Подписаться</a>
        </div>
        <Form className="coupon__form"/>
        <div className="coupon__content">
            <img src={Coupon1} alt="" className="coupon__img img-one"/>
            <img src={Coupon2} alt="" className="coupon__img img-two"/>
        </div>
      </div>
    </section>
  );
};

export default Coupon;
