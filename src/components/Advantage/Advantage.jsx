import React from "react";
import "./advantage.css"
import Advantage1 from "../../assets/advantage1.png"
import Advantage2 from "../../assets/advantage2.png"
import Advantage3 from "../../assets/advantage3.png"
import Advantage4 from "../../assets/advantage4.png"


const Advantage = () => {
  return (
    <section className="advantage section">
      <div className="advantage__container container grid">
        <h2 className="section__title advantage__title">
          Преимущества свечей ручной работы
        </h2>
        <div className="advantage__content">
          <div className="advantage__cell">
            <div className="advantage__icon">
              <img src={Advantage1} alt="" />
            </div>
            <p className="advantage__description">Индивидуальный подход</p>
            <span className="advantage__subdescription">
              Весь процесс создания свечей происходит вручную
            </span>
          </div>
          <div className="advantage__cell">
            <div className="advantage__icon">
              <img src={Advantage2} alt="" />
            </div>
            <p className="advantage__description">Долгое горение</p>
            <span className="advantage__subdescription">
              Время горения свечей достигает 50 часов
            </span>
          </div>
          <div className="advantage__cell">
            <div className="advantage__icon">
              <img src={Advantage3} alt="" />
            </div>
            <p className="advantage__description">Натуральный состав</p>
            <span className="advantage__subdescription">
              В составе натуральные растительные элементы
            </span>
          </div>
          <div className="advantage__cell">
            <div className="advantage__icon">
              <img src={Advantage4} alt="" />
            </div>
            <p className="advantage__description">Без вреда для здоровья</p>
            <span className="advantage__subdescription">
              Свечи гипоаллергенны, не содержат токсинов
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
