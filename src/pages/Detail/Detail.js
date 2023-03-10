import React, { useState } from 'react';
import './Detail.scss';

const Detail = () => {
  const [data, setData] = useState({ name: '', count: '', size: '' });
  const [count, setCount] = useState(1);
  const price = 260_000;
  const totalPrice = price * count;
  const handleCount = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };
  const onclick = () => {
    setCount(count + 1);
  };

  // const [changeButtonColor, setChangeButtonColor] = useState('');

  const click = event => {
    // changeButtonColor === ''
    //   ? setChangeButtonColor('check')
    //   : setChangeButtonColor('');
    // console.log(event.target.className);
    setData(prev => ({ ...prev, size: event.target.title }));
    console.log(event);
  };
  console.log(SHOSE_SIZE.map(list => list.size));
  console.log(data);

  return (
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
              return (
                <img
                  key={list.id}
                  className={`select_product_color ${list.color}`}
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
      <div>
        <a className="buy_now" href="#product_img_1">
          Buy Now
        </a>
      </div>
    </div>
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
