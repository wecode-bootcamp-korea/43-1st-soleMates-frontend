import React from 'react';
import './ListOrder.scss';

const ListOrder = () => {
  return (
    <dl className="list_order">
      <dt>상품금액</dt>
      <dd>dd원</dd>
      <dt>배송비</dt>
      <dd>0원</dd>
      <dt className="type_total">총결제금액</dt>
      <dd className="type_total">
        <em className="emph_price">dd원</em>
      </dd>
    </dl>
  );
};

export default ListOrder;
