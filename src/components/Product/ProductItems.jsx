import React from "react";
import { UilArrowRight } from '@iconscout/react-unicons'

const ProductItems = ({ item }) => {
  return (
    <div className="product__card" key={item.id}>
      <h3 className="product__title">{item.title}</h3>
      <img src={item.image} alt="" className="product__img" />
      <a href="#" className="product__button button">
      Перейти в каталог
      <UilArrowRight className = "product__button-icon"/>
      </a>
    </div>
  );
};

export default ProductItems;
