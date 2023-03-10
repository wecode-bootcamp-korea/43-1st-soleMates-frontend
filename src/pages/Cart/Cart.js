import React, { useState } from 'react';
import ListCart from './ListCart/ListCart';
import ItemChoice from '../../Components/ItemChoice/ItemChoice';
import './Cart.scss';

const Cart = () => {
  const [count, setCount] = useState(1); // 수량
  const [price, setPrice] = useState(75000); // 상품가격
  const formattedPrice = price.toLocaleString(); // 단위별 콤마 추가

  const total = price * count; // 총 가격
  const formattedTotal = total.toLocaleString(); // 단위별 콤마 추가

  const handleCount = num => {
    if (count === 1 && num === -1) return;
    setCount(count + num);
  };

  return (
    <div className="cart">
      <h2 className="tit_cart">
        장바구니 <span className="screen_out">담긴상품 : </span>1개
      </h2>
      <div className="group_cart">
        <div className="wrap_listcart">
          <strong className="screen_out">장바구니에 담긴 상품 목록</strong>
          <ItemChoice checkbox={'전체선택'} checkId={'checkAll'} />
          <ul className="list_cart">
            <li>
              <ItemChoice checkId={'check01'} />
              <span className="item_thumb">
                <img
                  src="../images/Product/@thumb_266x334.png"
                  className="img_g"
                  alt=""
                />
              </span>
              <span className="item_info">
                <strong className="tit_name">
                  <span className="screen_out">상품명 : </span>척 테일러 올스타
                  크래프티드 패치워크 에그렛척 테일러 올스타 크래프티드 패치워크
                  에그렛척 테일러 올스타 크래프티드 패치워크 에그렛척 테일러
                  올스타 크래프티드 패치워크 에그렛
                </strong>
                <span className="txt_opt">
                  [옵션 : 에그렛 /<span className="screen_out">사이즈 : </span>{' '}
                  220]
                </span>
                <span className="num_count">
                  <span className="screen_out">담긴 </span>수량 2
                  <span className="screen_out">개 </span>
                </span>
              </span>
              <span className="item_order">
                <em className="emph_price">
                  <span className="screen_out">상품 가격 : </span>
                  {formattedPrice}원
                </em>
                <span className="item_count">
                  <button
                    type="button"
                    className="btn_minus"
                    onClick={() => handleCount(-1)}
                  >
                    <span className="ico_shop ico_minus">옵션 빼기</span>
                  </button>
                  <label className="screen_out" htmlFor="count">
                    수량입력
                  </label>
                  <input
                    type="text"
                    className="inp_count"
                    id="count"
                    value={count}
                  />
                  <button
                    type="button"
                    className="btn_plus"
                    onClick={() => handleCount(1)}
                  >
                    <span className="ico_shop ico_plus">옵션 더하기</span>
                  </button>
                </span>
                <button className="btn_opt" type="button">
                  옵션 변경
                </button>
              </span>
              <button className="btn_delete" type="button">
                삭제
              </button>
            </li>
          </ul>
          <button className="btn_alldelete">전체 삭제</button>
        </div>
        <div className="wrap_order">
          <strong className="tit_order">주문금액</strong>
          <dl className="list_order">
            <dt>상품금액</dt>
            <dd>{formattedTotal}원</dd>
            <dt>배송비</dt>
            <dd>0원</dd>
            <dt className="type_total">총결제금액</dt>
            <dd className="type_total">
              <em className="emph_price">{formattedTotal}원</em>
            </dd>
          </dl>
          <a href="#none" className="link_order">
            전체상품 주문하기
          </a>
          <a href="#none" className="link_info">
            프로모션/쿠폰은 주문페이지에서 확인됩니다.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
