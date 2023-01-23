import React from "react";
import { projectsData } from "./Data";
import ProductItems from "./ProductItems";
const Products = () => {
  return (
      <div className="product__container container grid">
        {projectsData.map((item) => {
          return <ProductItems item={item} key={item.id} />;
        })}
      </div>
  );
};

export default Products;
