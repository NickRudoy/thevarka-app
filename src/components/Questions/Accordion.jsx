import React, { useState } from "react";

const Accordion = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion__item" key={item.id}>
      <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
        <div>{item.title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion__content">{item.content}</div>}
    </div>
  );
};

export default Accordion;
