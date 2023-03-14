import React, { useState } from 'react';
import ModalToCart from './ModalToCart';
import './Detail.scss';

const price = 260000;

const Detail = () => {
  const [detailData, setDetailData] = useState({
    name: '',
    productId: '',
    quantity: 1,
    size: '',
    color: '',
    price,
  });

  const { price: currentPrice, ...productInfo } = detailData;
  const totalPrice = detailData.price * detailData.quantity;

  const fetchData = { ...productInfo, totalPrice: totalPrice };
  console.log(fetchData);
  // console.log(check);
  const [like, setLike] = useState('off');
  const [check, setCheck] = useState('');
  const [cartModal, setCartModal] = useState(false);
  const openModal = () => {
    if (check.includes(0) && !(detailData.color === '')) {
      setCartModal(true);
    } else {
      alert('사이즈,색상을 선택해주세요');
    }
  };
  const closeCartModal = () => {
    setCartModal(false);
  };
  const onClickDecreaseBtn = () => {
    if (detailData.quantity <= 1) return;
    setDetailData({ ...detailData, quantity: detailData.quantity - 1 });
  };
  const onClickIncreaseBtn = () => {
    if (detailData.quantity >= 10) return;
    setDetailData({ ...detailData, quantity: detailData.quantity + 1 });
  };

  const onClickChooseSize = event => {
    setDetailData(prev => ({ ...prev, size: event.target.title }));
    const newSize = event.target.title;

    if (check === newSize) {
      setCheck('');
    } else {
      setCheck(newSize);
    }
  };

  const handleColor = event => {
    setDetailData(prev => ({ ...prev, color: event.target.title }));
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
          {IMG_LIST.map(({ id, src }) => {
            return (
              <img key={id} className="product_img" src={src} alt="soleMates" />
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
              {SHOES_SIZE.map(({ size, id }) => {
                const buttonCheckValue =
                  check === String(size) || check === size ? 'check' : '';
                return (
                  <button
                    onClick={onClickChooseSize}
                    key={id}
                    title={size}
                    className={`product_size_button ${buttonCheckValue} `}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
            <button>
              {IMG_LIST.map(({ color, id, src }) => {
                const selectProductColor =
                  detailData.color === String(color) ? 'color' : '';
                return (
                  <img
                    key={id}
                    onClick={handleColor}
                    title={color}
                    className={`select_product ${selectProductColor} `}
                    src={src}
                    alt="soleMates"
                  />
                );
              })}
            </button>
            <div className="product_count">
              <div className="product_count">
                <strong className="product_amount">수량</strong>
                <strong className="product_amount">
                  {detailData.quantity}
                </strong>
                <button
                  className="product_quantity"
                  onClick={onClickDecreaseBtn}
                >
                  −
                </button>
                <button
                  className="product_quantity"
                  onClick={onClickIncreaseBtn}
                >
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
            <ModalToCart
              imgData={IMG_LIST}
              productData={fetchData}
              close={closeCartModal}
            />
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
        <ul className="photo_grid">
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
        <ul className="user_review">
          {REVIEW_LIST.map(list => {
            return (
              <li className="user_review_list" key={list.id}>
                <div>
                  <div className="">{list.review}</div>
                  <span className="user_name">{list.userName}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Detail;

const SHOES_SIZE = [
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
    color: 'Black',
  },
  {
    id: 2,
    src: 'images/ProductDetail/red.png',
    color: 'Red',
  },
  {
    id: 3,
    src: 'images/ProductDetail/yellowboots.jpg',
    color: 'Yellow',
  },
  {
    id: 4,
    src: 'images/ProductDetail/product1.jpg',
    color: 'Navy',
  },
];

const REVIEW_LIST = [
  { id: 1, userName: '홍*훈', review: '좀 별론데요?', grade: 3 },
  { id: 2, userName: '이*태', review: '너무 마음에 드네요', grade: 5 },
  { id: 3, userName: '최*식', review: '', grade: 5 },
  { id: 4, userName: '김*태', review: '가죽 질감이 좋아요', grade: 4 },
  { id: 5, userName: '김*미', review: '색이 마음에 들어요', grade: 4 },
];
