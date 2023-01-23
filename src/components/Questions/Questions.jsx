import React from "react";
import Accordion from "./Accordion";
import "./question.css";
import { accordionData } from "./Data";
import QuestionImg from "../../assets/question.png";

const Questions = () => {
  return (
    <section className="question section">
      <div className="questions__container container grid">
        <div className="questions__cell">
          <h2 className="section__title questions__title">
            часто задаваемые вопросы
          </h2>

          <p className="section__subtitle question__subtitle">
            из какого материала изготовлены свечи?
          </p>
          <p className="question__description">
            Наши ароматические свечи изготовлены из 100% растительных
            компонентов
          </p>
          {accordionData.map((item) => {
            return <Accordion item={item} key={item.id} />;
          })}
        </div>
        <img src={QuestionImg} alt="" className="questions__img" />
      </div>
    </section>
  );
};

export default Questions;
