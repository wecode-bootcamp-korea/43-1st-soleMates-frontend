import React, { useEffect, useState } from 'react';
import Filter from './Filter/Filter.js';
import './ProductList.scss';
import ProductListImage from './ProductListImage/ProductListImage';

const ProductList = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/data/productList.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="product_list">
      <h1 className="title">카테고리</h1>
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
        <Filter />

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
