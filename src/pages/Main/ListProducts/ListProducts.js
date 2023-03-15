import React from 'react';
import { Link } from 'react-router-dom';
import './ListProducts.scss';

const ListProducts = ({ product }) => {
  return (
    <ul className="list_products">
      {product.map(({ id, url, img, name }) => (
        <li key={id}>
          <Link to={url} className="link_products">
            <img src={img} alt="" className="img_g" />
            <span className="txt_name">
              <strong className="screen_out">상품명 : </strong>
              {name}
            </span>
          </Link>
        </li>
      ))}
      ;
    </ul>
  );
};
export default ListProducts;
