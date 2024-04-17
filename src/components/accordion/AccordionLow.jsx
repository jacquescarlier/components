import React, { useState } from 'react';
import Arrow from "../../pictures/arrow_down.png";
import "./accordionLow.css"
const AccordionLow = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        <div className='dropdownTitle'>{title}</div>
        <img
          src={Arrow}
          alt="Fléche pour afficher le description"
          className={isOpen ? 'arrow up' : 'arrow down'}
        />
      </div>
      <div className={isOpen ? "accordion-content1-active" : "accordion-content1"}>
        {content}
      </div>
    </div>
  );
};

export default AccordionLow;
