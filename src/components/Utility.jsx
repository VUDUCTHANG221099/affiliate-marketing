import React from 'react';
import "../css/Utility.css"
const Utility = ({ onSortByName, onSortByPrice }) => {
  return (
    <div className="utility-container">
      <button className="utility-button" onClick={() => onSortByName('asc')}>
        A - Z
      </button>
      <button className="utility-button" onClick={() => onSortByName('desc')}>
        Z - A
      </button>
      <button className="utility-button" onClick={() => onSortByPrice('min')}>
        Price Min
      </button>
      <button className="utility-button" onClick={() => onSortByPrice('max')}>
        Price Max
      </button>
    </div>
  );
};

export default Utility;
