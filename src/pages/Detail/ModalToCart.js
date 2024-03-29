import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModalToCart.scss';

const ModalToCart = props => {
  const navigate = useNavigate();
  const { imgData, close, productData } = props;
  const { productId, quantity, price } = productData;

  const cart = () => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://10.58.52.94:3000/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
        body: JSON.stringify({
          productId: productId,
          quantity: quantity,
          price: price,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === 'SUCCESSFULLY_CREATE_CART') {
            alert('상품이 담겼습니다.');
            navigate('/cart');
          }
        });
    }
  };

  return (
    <>
      <div onClick={close} className="modal_to_cart" />
      <div className="modal_box">
        <button className="close_button" onClick={close}>
          ╳
        </button>
        <div className="order_title">주문한 상품</div>
        <div className="order_info">
          {imgData.map(({ id, color, src }) => {
            const matchColor =
              productData.color === String(color) ? src : 'none';
            return (
              <span key={id}>
                <img
                  className={`order_product_img ${matchColor}`}
                  src={matchColor}
                  alt="soleMates"
                />
              </span>
            );
          })}

          <div className="order_info_detail">
            <div className="order_info_name">{productData.name}</div>
            <div className="order_info_quantity">
              {' '}
              수량:{productData.quantity}
            </div>
            <div className="order_info_color">색상 : {productData.color}</div>
            <div className="order_info_size"> 사이즈: {productData.size}</div>
            <div className="order_info_price">
              가격 :{' '}
              {productData.price
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </div>
          </div>
        </div>
        <div>
          <button onClick={cart} className="shopping_basket_button">
            장바구니 확인
          </button>
          <button onClick={close} className="shopping_button">
            쇼핑 계속하기
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalToCart;
