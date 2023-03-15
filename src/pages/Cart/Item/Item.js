import React, { useState, useEffect } from 'react';
import ItemChoice from '../../../Components/ItemChoice/ItemChoice';
import './Item.scss';

const ItemCount = ({
  cartId,
  productImage,
  productName,
  productPrice,
  handleChange,
  quantity,
  productList,
  setProductList,
  checkList,
  setCheckList,
  setTotalPrice,
}) => {
  const [count, setCount] = useState(quantity);

  if (count < 1) {
    setCount(1);
  }

  function handleChange(e) {
    count(e.target.value);
  }

  const total = productPrice * count; // 총 가격
  const commaTotal = total.toLocaleString();

  useEffect(() => {
    setTotalPrice(prev => (prev += total));
  }, []);

  const handlePrice = e => {
    const className = e.target.className;
    if (className.indexOf('ico_plus') !== -1) {
      setCount(count + 1);
      setTotalPrice(prev => (prev += productPrice));
    } else if (className.indexOf('minus') !== -1 && count > 1) {
      setCount(count - 1);
      setTotalPrice(prev => (prev -= productPrice));
    }
  };

  function handleRemoveItem() {
    setTotalPrice(prev => (prev -= total));
    setProductList(productList.filter(item => item.cartId !== cartId));
  }

  const isChecked = checkList[cartId - 1];

  const handleCheckBox = () => {
    const newArr = [...checkList];
    newArr[cartId - 1] = !newArr[cartId - 1];
    setCheckList(newArr);
  };

  return (
    <li key={cartId} value={cartId}>
      <ItemChoice
        checkId={`checkBox${cartId}`}
        isChecked={isChecked}
        handleCheckBox={handleCheckBox}
      />
      <span className="item_thumb">
        <img src={productImage} className="img_g" alt="" />
      </span>
      <span className="item_info">
        <strong className="tit_name">
          <span className="screen_out">상품명 : </span>
          {productName}
        </strong>
        <span className="txt_opt">
          &#91;옵션 : 에그렛 /<span className="screen_out">사이즈 : </span>
          220&#93;
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
      <button className="btn_delete" type="button" onClick={handleRemoveItem}>
        삭제
      </button>
    </li>
  );
};

export default ItemCount;