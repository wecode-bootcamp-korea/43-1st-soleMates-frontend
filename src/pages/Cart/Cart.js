import React, { useState, useEffect } from 'react';
import EmptyCart from './EmptyCart/EmptyCart';
import GroupCart from './GroupCart/GroupCart';
import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.182:8000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjc4OTQ4OTQyfQ.CsY8PxffY2f894nIuun8q-xepQm3UBOT_EX0r2SAr2o',
      },
    })
      .then(response => response.json())
      .then(data => {
        setProductList(data.cartData);
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
        <GroupCart productList={productList} setProductList={setProductList} />
      )}
    </div>
  );
};

export default Cart;
