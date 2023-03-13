import React, { useState, useEffect } from 'react';
import './Item.scss';

const ItemCount = ({
  id,
  image,
  name,
  price,
  handleChange,
  quantity,
  productList,
  setProductList,
  totalPrice,
  setTotalPrice,
}) => {
  const [count, setCount] = useState(quantity);

  if (count < 1) {
    setCount(1);
  }

  function handleChange(e) {
    count(e.target.value);
  }

  function handleRemoveItem() {
    setProductList(productList.filter(item => item.id !== id));
  }

  const total = price * count; // 총 가격
  const commaTotal = total.toLocaleString();

  useEffect(() => {
    setTotalPrice(prev => (prev += total));
  }, []);

  const handlePrice = e => {
    const className = e.target.className;
    if (className.indexOf('ico_plus') !== -1) {
      setCount(count + 1);
      setTotalPrice(prev => (prev += total));
    } else if (className.indexOf('minus') !== -1 && count > 1) {
      setCount(count - 1);
      setTotalPrice(prev => (prev -= total));
    }
  };

  return (
    <li key={id}>
      <span className="item_choice">
        <input type="checkbox" id={`checkBox${id}`} className="inp_check" />
        <label htmlFor={`checkBox${id}`} className="lab_check">
          <span className="ico_shop ico_check"></span>
        </label>
      </span>
      <span className="item_thumb">
        <img src={image} className="img_g" alt="" />
      </span>
      <span className="item_info">
        <strong className="tit_name">
          <span className="screen_out">상품명 : </span>
          {name}
        </strong>
        <span className="txt_opt">
          [옵션 : 에그렛 /<span className="screen_out">사이즈 : </span> 220]
        </span>
        <span className="num_count">
          <span className="screen_out">담긴 </span>수량 {count}
          <span className="screen_out">개 </span>
        </span>
      </span>
      <span className="item_order">
        <em className="emph_price">
          <span className="screen_out">상품 가격 : </span>
          {commaTotal}원
        </em>
        <span className="item_count">
          <button type="button" className="btn_minus" onClick={handlePrice}>
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
            onChange={handleChange}
          />
          <button type="button" className="btn_plus" onClick={handlePrice}>
            <span className="ico_shop ico_plus">옵션 더하기</span>
          </button>
        </span>
      </span>
      <button
        className="btn_delete"
        type="button"
        onClick={() => handleRemoveItem(id)}
      >
        삭제
      </button>
    </li>
  );
};

export default ItemCount;
