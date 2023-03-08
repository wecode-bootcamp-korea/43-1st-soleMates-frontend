import React from 'react';
import './ListProducts.scss';

const ListProducts = ({ product }) => {
  const { id, url, name, img } = product;
  return (
    <ul className="list_products">
      {product.map(item => (
        <li key={item.id}>
          <a href={item.url} className="link_products">
            <img src={item.img} alt="" className="img_g" />
            <span className="txt_name">
              <strong className="screen_out">상품명 : </strong>
              {item.name}
            </span>
          </a>
        </li>
      ))}
      ;
    </ul>
  );
};
export default ListProducts;
