import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyCart.scss';

const EmptyCart = () => {
  return (
    <div className="empty_cart">
      <strong className="tit_empty">장바구니에 담긴 상품이 없습니다.</strong>
      <p className="desc_cart">
        척 70 무브 첫테일러, 원스타, 런스타 등<br />
        지금 컴버스의 다양한 상품을 찾아보세요.
      </p>
      <Link to="/" className="btn_cart">
        쇼핑계속하기
      </Link>
    </div>
  );
};
export default EmptyCart;
