import React, { useEffect, useState } from 'react';
import ProductListImage from '../../Components/ProductListImage/ProductListImage';
import './ProductList.scss';

const ProductList = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/data/productList.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="product_list">
      <h1 className="title">카테고리에 따라 변화</h1>
      <div className="product_list_function">
        <div className="product_list_box">
          <div className="product_list_filter">필터 </div>
          <div className="product_count">
            <span>
              총<strong className="product_total_count">8</strong>
              개의 상품
            </span>
          </div>
          <select className="product_sell_array">
            <option value="1"> 인기순</option>
            <option value="2"> 신상품순</option>
            <option value="3"> 높은 가격순</option>
            <option value="4"> 낮은 가격순</option>
          </select>
        </div>
      </div>
      <div className="product_main">
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
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        220
                      </button>
                    </li>
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        225
                      </button>
                    </li>
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        230
                      </button>
                    </li>
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        235
                      </button>
                    </li>
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        240
                      </button>
                    </li>
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        245
                      </button>
                    </li>
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        250
                      </button>
                    </li>{' '}
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        255
                      </button>
                    </li>{' '}
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        260
                      </button>
                    </li>{' '}
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        265
                      </button>
                    </li>{' '}
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        270
                      </button>
                    </li>{' '}
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        275
                      </button>
                    </li>
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        280
                      </button>
                    </li>
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        285
                      </button>
                    </li>
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        290
                      </button>
                    </li>
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        295
                      </button>
                    </li>
                    <li className="filter_size_button_product_record">
                      <button
                        className="filter_size_button_product_record_option"
                        type="button"
                      >
                        300
                      </button>
                    </li>
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
                  <li className="filter_color_button_record">
                    <button
                      className="filter_color_button_record_black"
                      type="button"
                    />
                  </li>
                  <li className="filter_color_button_record">
                    <button
                      className="filter_color_button_record_red"
                      type="button"
                    />
                  </li>
                  <li className="filter_color_button_record">
                    <button
                      className="filter_color_button_record_yellow"
                      type="button"
                    />
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>

        <div className="list_container">
          {data &&
            data.map(
              ({
                id,
                color,
                setColor,
                image,
                title,
                price,
                discount,
                discountRate,
              }) => {
                return (
                  <ProductListImage
                    key={id}
                    setColor={setColor}
                    color={color}
                    image={image}
                    title={title}
                    price={price}
                    discount={discount}
                    discountRate={discountRate}
                  />
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
