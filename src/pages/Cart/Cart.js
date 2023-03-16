import React, { useState, useEffect } from 'react';
import EmptyCart from './EmptyCart/EmptyCart';
import GroupCart from './GroupCart/GroupCart';
import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/cartProduct.json', {
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
        <GroupCart productList={productList} setProductList={setProductList} />
      )}
    </div>
  );
};

export default Cart;
