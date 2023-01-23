import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { UilPlus } from '@iconscout/react-unicons'


const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_k92c866",
      "template_0i2nh3z",
      form.current,
      "tUCxezWTcOoNiDx0u"
    );
    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="coupon__form">
            <div className="coupon__form-div">
              <input
                type="text"
                name="user_name"
                className="coupon__form-input"
                placeholder="Имя"
              />
            </div>

            <div className="coupon__form-div">
              <input
                type="phone"
                name="user_phone"
                className="coupon__form-input"
                placeholder="Номер телефона"
              />
            </div>
            <div className="coupon__form-div">

              <input
                type="text"
                name="user_email"
                className="coupon__form-input"
                placeholder="Ник в инстаграм"
              />
            </div>
            <button className="button button--flex coupon__button">
                <UilPlus />
                получить промокод
            </button>
          </form>
  )
}

export default Form