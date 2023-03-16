import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterSizeButton = props => {
  const { id, size } = props;
  const [btnColor, setBtnColor] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSize, setSelectedSize] = useState('');

  const sizeArr = searchParams.getAll('size');

  const setSize = (value, e) => {
    if (sizeArr.indexOf(value) === -1) {
      searchParams.append('size', value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('size');
      sizeArr
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
    } else {
      setBtnColor('');
    }
    setSize(size, e);
  };

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
