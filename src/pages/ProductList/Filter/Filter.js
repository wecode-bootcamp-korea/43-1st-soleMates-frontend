import React from 'react';
import FilterSizeButton from '../FilterSizeButton/FilterSizeButton';

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter_box">
        <form action="#none" method="post">
          구분
          <div className="filter_box_size">
            <br />
            <h3 className="filter_size" name="filter_size">
              사 이 즈
            </h3>

            <div className="filter_size_button">
              <ul className="filter_size_button_product">
                {SIZE_BUTTON.map(({ id, size }) => (
                  <FilterSizeButton key={id} size={size} />
                ))}
              </ul>
            </div>
          </div>
          <div className="filter_box_price">
            <br />
            <h3 className="filter_price" name="filter_price">
              가 격
            </h3>
            <progress
              id="progress"
              value="500"
              min="0"
              max="1000"
              className="filter_price_progress"
            />
          </div>
          <div className="filter_box_color">
            <label>
              <br />
              <input
                className="filter_color"
                name="filter_color"
                type="checkbox"
              />
              색 상
            </label>
            <ul className="filter_color_button">
              {COLOR_BUTTON.map(({ id, color }) => (
                <li className="filter_color_button_record">
                  <button
                    className={`filter_color_button_record_${color}`}
                    type="button"
                    key={id}
                  />
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;

const SIZE_BUTTON = [
  { id: 1, size: '220' },
  { id: 2, size: '230' },
  { id: 3, size: '240' },
  { id: 4, size: '250' },
  { id: 5, size: '260' },
  { id: 6, size: '270' },
  { id: 7, size: '280' },
  { id: 8, size: '290' },
  { id: 9, size: '300' },
];

const COLOR_BUTTON = [
  { id: 1, color: 'black' },
  { id: 2, color: 'red' },
  { id: 3, color: 'yellow' },
];
