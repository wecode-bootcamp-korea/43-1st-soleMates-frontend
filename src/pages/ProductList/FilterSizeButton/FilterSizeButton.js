import React, { useState } from 'react';

const FilterSizeButton = props => {
  const { id, size } = props;
  const [btnColor, setBtnColor] = useState('');

  const handleClick = () => {
    if (btnColor === '') {
      setBtnColor('yellow');
    } else {
      setBtnColor('');
    }
  };
  return (
    <li className="filter_size_button_product_record">
      <button
        key={id}
        className="filter_size_button_product_record_option"
        type="button"
        onClick={handleClick}
        style={{ backgroundColor: btnColor }}
      >
        {size}
      </button>
    </li>
  );
};

export default FilterSizeButton;
