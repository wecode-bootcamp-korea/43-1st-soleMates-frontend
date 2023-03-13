import React, { useState } from 'react';
import ModalToCart from './ModalToCart';
import './Detail.scss';

const price = 260000;

const Detail = () => {
  const [data, setData] = useState({
    name: '',
    quantity: 1,
    size: '',
    color: '',
    price,
  });

  const { price: currentPrice, ...productInfo } = data;
  const totalPrice = data.price * data.quantity;
  // console.log({ ...productInfo, totalPrice: totalPrice });
  const fetchData = { ...productInfo, totalPrice: totalPrice };
  console.log(fetchData);
  const [like, setLike] = useState('off');
  const [check, setCheck] = useState('');
  const [cartModal, setCartModal] = useState(false);
  const openModal = () => {
    setCartModal(true);
  };
  const closeCartModal = () => {
    setCartModal(false);
  };

  const onClickDecreaseBtn = () => {
    if (data.quantity <= 1) return;
    setData({ ...data, quantity: data.quantity - 1 });
  };
  const onClickIncreaseBtn = () => {
    if (data.quantity >= 10) return;
    setData({ ...data, quantity: data.quantity + 1 });
  };

  const click = event => {
    setData(prev => ({ ...prev, size: event.target.title }));
    const newSize = event.target.title;

    if (check === newSize) {
      setCheck('');
    } else {
      setCheck(newSize);
    }
  };

  const handleColor = event => {
    setData(prev => ({ ...prev, color: event.target.title }));
  };

  const empty_heart = () => {
    if (like === 'off') {
      setLike('on');
    } else {
      setLike('off');
    }
  };
  const howManyLike = 563;
  const likeAmount = `${like === 'on' ? howManyLike + 1 : howManyLike}`;
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
              <button
                onClick={empty_heart}
                className={`ico_shop ico_like ${like === 'off' ? 'off' : 'on'}`}
              >
                좋아요
              </button>
              <strong className="how_many_like">{likeAmount}</strong>
            </div>
            <strong className="product_name">1460스무스</strong>

            <div className="product_size">
              {SHOSE_SIZE.map(list => {
                const buttonCheckValue =
                  check === String(list.size) || check === list.size
                    ? 'check'
                    : '';
                return (
                  <button
                    onClick={click}
                    key={list.id}
                    title={list.size}
                    className={`product_size_button ${buttonCheckValue} `}
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
                <strong className="product_amount">{data.quantity}</strong>
                <button className="product_minus" onClick={onClickDecreaseBtn}>
                  −
                </button>
                <button className="product_plus" onClick={onClickIncreaseBtn}>
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
            <div className="shopping_button">
              <div className="cart_button">
                <button onClick={openModal} className="cart">
                  장바구니
                </button>
              </div>
              <div className="buy_button">
                <button className="buy">구매하기</button>
              </div>
            </div>
          </div>
          {cartModal && (
            <ModalToCart setCartModal={setCartModal} close={closeCartModal} />
          )}
        </div>
        <div className="detail_navigate">
          <button
            className="link_navigate"
            onClick={() => {
              window.scrollTo({ top: 0, screenLeft: 0, behavior: 'smooth' });
            }}
          >
            Buy Now
            <label className="link_navigate_ko">구매하기</label>
          </button>
          <button
            className="link_navigate"
            onClick={() => {
              window.scrollTo({ top: 2800, screenLeft: 0, behavior: 'smooth' });
            }}
          >
            Review
            <label className="link_navigate_ko">상품 후기</label>
          </button>
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
