import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemChoice from '../../Components/ItemChoice/ItemChoice';
import EmptyCart from './EmptyCart/EmptyCart';
import Item from './Item/Item';
import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);
  const [price, setPrice] = useState(75000); // 상품가격
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('/data/productList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <div className="cart">
      <h2 className="tit_cart">
        장바구니 <span className="screen_out">담긴상품 : </span>
        {productList.length}개
      </h2>
      {productList.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="group_cart">
          <div className="wrap_listcart">
            <strong className="screen_out">장바구니에 담긴 상품 목록</strong>
            <span className="item_choice">
              <input type="checkbox" id="checkBox" className="inp_check" />
              <label htmlFor="checkBox" className="lab_check">
                <span className="ico_shop ico_check"></span>
              </label>
              <span className="txt_choice">전체선택</span>
            </span>
            <ul className="list_cart">
              {productList.map(
                ({ id, image, name, count, price, quantity }) => {
                  return (
                    <Item
                      key={id}
                      id={id}
                      image={image}
                      name={name}
                      checkBoxName={id}
                      count={count}
                      price={price}
                      quantity={quantity}
                      total={quantity * price}
                      totalPrice={count}
                      handleChange={() => {}}
                      productList={productList}
                      setProductList={setProductList}
                    />
                  );
                }
              )}
            </ul>
            <button className="btn_alldelete">전체 삭제</button>
          </div>
          <div className="wrap_order">
            <strong className="tit_order">주문금액</strong>
            <dl className="list_order">
              <dt>상품금액</dt>
              <dd>{totalPrice}원</dd>
              <dt>배송비</dt>
              <dd>0원</dd>
              <dt className="type_total">총결제금액</dt>
              <dd className="type_total">
                <em className="emph_price">{totalPrice}원</em>
              </dd>
            </dl>
            <Link to="#none" className="link_order">
              전체상품 주문하기
            </Link>
            <Link to="#none" className="link_info">
              프로모션/쿠폰은 주문페이지에서 확인됩니다.
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
