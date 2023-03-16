import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmptyCart from './EmptyCart/EmptyCart';
import GroupCart from './GroupCart/GroupCart';
import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);

  const saveUserAccount2 = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://10.58.52.169:3000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: saveUserAccount2,
      },
    })
      .then(response => response.json())
      .then(data => {
        setProductList(data.cartData);
      });
  }, []);
  console.log(productList.length);

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
