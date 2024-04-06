import React, { useState } from 'react';
import './accordionLow.css';
import Arrow from "../../pictures/arrow_down.png";

const AccordionLow = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={isOpen ? 'arrow up' : 'arrow down'}>
        <img
            src={Arrow}
            alt="Fléche pour afficher le description"
            className={isOpen ? "rotated" : "arrow "}
          />
        </span>
      </div>
      {isOpen && (
        <div className="content">
         <p>{content}</p> 
        </div>
      )}
    </div>
  );
};

export default AccordionLow;
