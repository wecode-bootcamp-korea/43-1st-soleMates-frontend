import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterSizeButton = props => {
  const { id, size } = props;
  const [btnColor, setBtnColor] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSize, setSelectedSize] = useState('');

  const setSize = (value, e) => {
    if (e.target.value) {
      searchParams.append('size', value);
      setSearchParams(searchParams);
    } else {
      const search = searchParams.getAll('size');
      searchParams.delete('size');
      search
        .filter(list => list !== value)
        .forEach(value => {
          searchParams.append('size', value);
        });
      setSearchParams(searchParams);
    }
  };

  const handleClick = e => {
    if (btnColor === '') {
      setBtnColor('yellow');
      setSize(size, e);
    } else {
      setBtnColor('');
    }
  };

  console.log(selectedSize);
  return (
    <li className="filter_size_button_product_record">
      <button
        key={id}
        className="filter_size_button_product_record_option"
        type="button"
        onClick={handleClick}
        style={{ backgroundColor: btnColor }}
        value={size}
        // onChange={}
      >
        {size}
      </button>
    </li>
  );
};

export default FilterSizeButton;
