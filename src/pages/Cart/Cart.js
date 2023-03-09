import React from 'react';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <h2 className="tit_cart">장바구니</h2>
      <div className="empty_cart">
        <strong class="tit_empty">장바구니에 담긴 상품이 없습니다.</strong>
        <p className="desc_cart">
          척 70 무브 첫테일러, 원스타, 런스타 등<br />
          지금 컴버스의 다양한 상품을 찾아보세요.
        </p>
        <a href="#none" className="btn_cart">
          쇼핑계속하기
        </a>
      </div>
    </div>
  );
};

export default Cart;
