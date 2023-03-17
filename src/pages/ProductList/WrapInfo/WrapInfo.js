import React from 'react';
import { Link } from 'react-router-dom';

const WrapInfo = props => {
  const { id, name, price, categories, image_url } = props;

  return (
    <Link to="/detail/3" className="wrap_info">
      <span className="list_title">{name}</span>
      <span className="list_image" />
      <span className="list_price"> {parseInt(price).toLocaleString()}</span>
      {/* <span className="list_discount">{discount.toLocaleString()}원</span>
      <span className="list_discount_rate">{discountRate}</span> */}
    </Link>
  );
};

export default WrapInfo;
