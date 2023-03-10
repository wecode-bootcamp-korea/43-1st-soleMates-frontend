import React, { useState } from 'react';
import './Detail.scss';

const Detail = () => {
  const [data, setData] = useState({
    name: '',
    quantity: '',
    size: '',
    color: '',
  });
  const [count, setCount] = useState(1);
  const price = 260_000;
  const totalPrice = price * count;
  const handleCount = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };
  const onclick = () => {
    count < 99 ? setCount(count + 1) : setCount(99);
  };

  const click = event => {
    setData(prev => ({ ...prev, size: event.target.title }));
    console.log(event);
  };

  const handleColor = event => {
    setData(prev => ({ ...prev, color: event.target.title }));
    console.log(event);
  };
  console.log(data);

  return (
    <>
      <div className="detail">
        <div className="product_img_list">
          <p id="product_img_1" />
          {IMG_LIST.map(list => {
            return (
              <img
                key={list.id}
                className="product_img"
                src={list.src}
                alt="soleMates"
              />
            );
          })}
        </div>
        <div className="product_detail">
          <div className="product_detail_option">
            <div className="icon">
              <span className="ico_shop ico_sharing">공유하기</span>
              <span className="ico_shop ico_like">좋아요</span>
              <strong className="how_many_like">547</strong>
            </div>
            <strong className="product_name">1460스무스</strong>

            <div className="product_size">
              {SHOSE_SIZE.map(list => {
                const buttonCheckValue =
                  data.size === String(list.size) ? 'check' : '';
                return (
                  <button
                    onClick={click}
                    key={list.id}
                    title={list.size}
                    className={`product_size_button ${buttonCheckValue}`}
                  >
                    {list.size}
                  </button>
                );
              })}
            </div>
            <button>
              {IMG_LIST.map(list => {
                const selectProductColor =
                  data.color === String(list.color) ? 'color' : '';
                return (
                  <img
                    key={list.id}
                    onClick={handleColor}
                    title={list.color}
                    className={`select_product ${selectProductColor} `}
                    src={list.src}
                    alt="soleMates"
                  />
                );
              })}
            </button>
            <div className="product_count">
              <div className="product_count">
                <strong className="product_amount">수량</strong>
                <strong className="product_amount">{count}</strong>
                <button
                  className="product_minus"
                  onClick={() => {
                    handleCount();
                  }}
                >
                  −
                </button>
                <button className="product_plus" onClick={onclick}>
                  +
                </button>
              </div>
              <span className="product_price"> ₩ </span>
              <span className="product_price">
                {totalPrice
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </div>
            <div className="button_list">
              <button className="cart">장바구니</button>
              <button className="buy">구매하기</button>
            </div>
          </div>
        </div>

        <div className="detail_navigate">
          <a className="link_navigate" href="#product_img_1">
            Buy Now
            <strong className="link_navigate_ko">구매하기</strong>
          </a>
          <a className="link_navigate" href="#review">
            Review
            <strong className="link_navigate_ko">상품 후기</strong>
          </a>
        </div>
      </div>
      <div id="review">
        <div className="review">상품 후기</div>
        <div className="photo_review">포토리뷰</div>
        <ul className="photo_flex">
          {IMG_LIST.map(list => {
            return (
              <button className="modal_photo_review" key={list.id}>
                <img
                  className="photo_review_list"
                  src={list.src}
                  alt="soleMates"
                />
              </button>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Detail;

const SHOSE_SIZE = [
  { id: 1, size: 220 },
  { id: 2, size: 230 },
  { id: 3, size: 240 },
  { id: 4, size: 250 },
  { id: 5, size: 260 },
  { id: 6, size: 270 },
  { id: 7, size: 280 },
  { id: 8, size: 290 },
  { id: 9, size: 300 },
  { id: 10, size: 310 },
];

const IMG_LIST = [
  {
    id: 1,
    src: 'images/ProductDetail/productlist.png',
    color: ' black',
  },
  {
    id: 2,
    src: 'images/ProductDetail/product1.jpg',
    color: 'red',
  },
  {
    id: 3,
    src: 'images/ProductDetail/productlist.png',
    color: 'yellow',
  },
  {
    id: 4,
    src: 'images/ProductDetail/product1.jpg',
    color: 'navy',
  },
];
