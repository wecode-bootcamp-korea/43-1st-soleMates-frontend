import React, { useEffect, useState } from 'react';
import Filter from './Filter/Filter.js';
import './ProductList.scss';
import ProductListImage from './ProductListImage/ProductListImage';

const ProductList = () => {
  // const [data, setData] = useState([]);
  const [getData, setGetData] = useState([]);
  const price = parseInt(getData.price);

  useEffect(() => {
    fetch('http://10.58.52.94:3000/products?categoryname="슈즈"', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(data => setGetData(data.data));
  }, []);
  // console.log(getData.price);
  return (
    <div className="product_list">
      {/* {CATEGORY.map(({ id, category }) => (
        <h1 className="title">{category}</h1>
      ))} */}

      <h1 className="title">{getData[0]?.categories}</h1>
      <div className="product_list_function">
        <div className="product_list_box">
          <div className="product_list_filter">필터 </div>
          <div className="product_count">
            <span>
              총<strong className="product_total_count">9</strong>
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
        <Filter setGetData={setGetData} />

        <div className="list_container">
          {getData &&
            getData.map(
              ({
                id,
                name,
                price,
                categories,
                image_url,

                // id,
                // color,
                // setColor,
                // image,
                // title,
                // price,,
                // discount,
                // discountRate,
              }) => {
                return (
                  <ProductListImage
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    categories={categories}
                    image_url={image_url}
                    // key={id}
                    // setColor={setColor}
                    // color={color}
                    // image={image}
                    // title={title}
                    // price={price}
                    // discount={discount}
                    // discountRate={discountRate}
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

const CATEGORY = [
  { id: 1, category: '슈즈' },
  { id: 2, category: '부츠' },
  { id: 3, category: '샌들' },
];
