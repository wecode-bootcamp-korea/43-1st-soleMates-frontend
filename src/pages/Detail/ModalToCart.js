import React from 'react';
import './ModalToCart.scss';

const ModalToCart = props => {
  const { imgData, close, productData } = props;

  // const closeModal = () => {
  //   setCartModal(false);
  // };

  return (
    <>
      <div onClick={close} className="modal_to_cart" />
      <div className="modal_box">
        <button className="close_button" onClick={close}>
          ╳
        </button>
        <div className="order_title">주문한 상품</div>
        <div className="order_info">
          {imgData.map(({ color, src }) => {
            const matchColor =
              productData.color === String(color) ? src : 'none';
            console.log(src);
            return (
              <span>
                <img
                  className={`order_product_img ${matchColor}`}
                  src={matchColor}
                  alt="soleMates"
                />
              </span>
            );
          })}
          {/* <img className="order_product_img" src={imgData} alt="soleMates" /> */}
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
              {productData.totalPrice
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </div>
          </div>
        </div>
        <div>
          <button onClick={close} className="shopping_basket_button">
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

// productId,quantity,price
