import React, { useState, useEffect } from 'react';
import ModalToCart from './ModalToCart';
import './Detail.scss';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
  const [data, setData] = useState([]);
  const price = parseInt(data.price);
  const [detailData, setDetailData] = useState({
    productId: '',
    quantity: 1,
    size: '',
    color: '',
  });
  const params = useParams();
  const productId = params.id;
  // console.log(productId);
  // const { price: currentPrice, ...productInfo } = detailData;
  const totalPrice = price * detailData.quantity;

  const fetchData = {
    ...detailData,
    price: totalPrice,
    name: data.name,
    productId: params.id,
  };
  // console.log(fetchData);
  const [like, setLike] = useState('off');
  const [check, setCheck] = useState('');
  const [cartModal, setCartModal] = useState(false);
  const [review, setReview] = useState('');
  const [arrReview, setArrReview] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewData, setReviewData] = useState({});
  const [getReviewData, setGetReviewData] = useState([]);
  const newReviewData = {
    ...reviewData,
    productId: '',
    name: '',
  };
  console.log(newReviewData);
  // console.log(reviewData);
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

  const reviewValue = e => {
    setReview(e.target.value);
    setReviewData(review => ({ ...review, comment: e.target.value }));
  };
  const navigate = useNavigate();

  const post = event => {
    event.preventDefault();
    const tokenDetail = localStorage.getItem('token', data.token);

    if (tokenDetail) {
      // setArrReview(reviewList => [...reviewList, review]);
      setReview('');
      fetch('http://10.58.52.169:3000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: tokenDetail,
        },
        body: JSON.stringify({
          productId: data.id,
          comment: review,
          rating,
        }),
      })
        .then(response => response.json())
        .then(data => setReviewData(data.data));
    } else if (tokenDetail === null) {
      alert('로그인후 이용해주세요');
      navigate('/login');
    }
  };
  // console.log(newReviewData);
  useEffect(() => {
    fetch('http://10.58.52.169:3000/reviews/product/1', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(response => response.json())
      .then(data => setGetReviewData(data.data));
  }, [arrReview]);

  // console.log(getReviewData);
  const decreaseStar = event => {
    event.preventDefault();
    if (rating <= 0) return;
    setRating(rating - 1);
    setReviewData(review => ({ ...review, rating: rating - 1 }));
  };
  const increaseStar = event => {
    event.preventDefault();
    if (rating >= 5) return;
    setRating(rating + 1);
    setReviewData(review => ({ ...review, rating: rating + 1 }));
  };
  useEffect(() => {
    fetch(`http://10.58.52.169:3000/products/detail/${productId}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setData(data.data[0]));
  }, [productId]);
  // console.log(data.images);
  console.log(reviewData);

  return (
    <>
      <div className="detail">
        <div className="product_img_list">
          <p id="product_img_1" />
          {data.images &&
            data.images.map(({ id, url }) => {
              return (
                <img
                  key={id}
                  className="product_img"
                  src={url}
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
            <strong className="product_name">{data.name}</strong>

            <div className="product_size">
              {data.size &&
                data.size.map(({ size, id }) => {
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
                <button onClick={openModal} className="cart_btn">
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
          {getReviewData.map(({ id, rating, comment, name }) => {
            return (
              <li className="user_review_list" key={id}>
                <div className="review_info">
                  <span className="user_name">{name}</span>
                  <span className={`ico_shop ico_star${rating}`}>별점</span>
                  <div>{comment}</div>
                </div>
              </li>
            );
          })}
        </ul>
        <form className="create_review">
          <input
            className="add_review"
            type="text"
            value={review}
            onChange={reviewValue}
            placeholder="리뷰달기"
          />
          <div className="flex_star">
            <button className="decrease_star_btn" onClick={decreaseStar}>
              −
            </button>
            <span className={`ico_shop ico_star${rating}`}>별점</span>
            <button className="increase_star_btn" onClick={increaseStar}>
              +
            </button>
          </div>

          <button className="review_button" onClick={post}>
            게시
          </button>
        </form>
      </div>
    </>
  );
};
export default Detail;

const IMG_LIST = [
  {
    id: 1,
    src: '/images/ProductDetail/productlist.png',
    color: 'Black',
  },
  {
    id: 2,
    src: '/images/ProductDetail/red.png',
    color: 'Red',
  },
  {
    id: 3,
    src: '/images/ProductDetail/yellowboots.jpg',
    color: 'Yellow',
  },
  {
    id: 4,
    src: '/images/ProductDetail/product1.jpg',
    color: 'Dark Navy',
  },
];
