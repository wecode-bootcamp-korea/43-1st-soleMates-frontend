import React from 'react';
import EmptyCart from './EmptyCart/EmptyCart';
import ItemChoice from '../../Components/ItemChoice/ItemChoice';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <h2 className="tit_cart">장바구니</h2>
      {/* <EmptyCart /> 장바구니가 비어있을때 */}
      <div className="group_cart">
        <div className="wrap_listcart">
          <div className="box_cart">
            신규 회원가입시, 즉시 사용가능한 1만원 프로모션 코드를
            발급해드립니다.
          </div>
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
            </li>
          </ul>
        </div>
        <div className="wrap_order"></div>
      </div>
    </div>
  );
};

export default Cart;
