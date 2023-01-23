import React from "react";
import "./quote.css";
import QuoteImg from "../../assets/quote.png";

const Quote = () => {
  return (
    <section className="quote section">
      <div className="quote__container container grid">
        <h2 className="section__title quote__title">
          Создавая красоту и уют вокруг, вы сохраните гармонию и спокойствие
          внутри себя
        </h2>
        <img src={QuoteImg} alt="" className="quote__img" />
      </div>
    </section>
  );
};

export default Quote;
