import React, { useState } from 'react';

const Dropdown = ({dropdownData}) => {
    // State pour gérer la valeur sélectionnée
    const [selectedValue, setSelectedValue] = useState('');
  
    // Options du dropdown sous forme de tableau d'objets JSON
   
  
    // Gestionnaire de changement pour mettre à jour la valeur sélectionnée
    const handleDropdownChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="dropdown">Sélectionnez une option :</label>
        <select id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
          <option value="">Sélectionnez...</option>
          {dropdownData.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
  
        {/* Afficher la valeur sélectionnée */}
        {selectedValue && <p>Vous avez sélectionné : {selectedValue}</p>}
      </div>
    );
  };
  
  export default Dropdown;