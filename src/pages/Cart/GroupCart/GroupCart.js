import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemChoice from '../../../Components/ItemChoice/ItemChoice';
import Item from '../Item/Item';
import './GroupCart.scss';

const GroupCart = props => {
  const { productList, setProductList } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkList, setCheckList] = useState([]);

  const isAllChecked = checkList.every(value => value === true);

  useEffect(() => {
    const newArr = new Array(productList.length).fill(true);
    setCheckList(newArr);
  }, []);

  const handleAllCheck = () => {
    const newArr = [...checkList];
    newArr.fill(!isAllChecked);
    setCheckList(newArr);
  };

  return (
    <div className="group_cart">
      <div className="wrap_listcart">
        <strong className="screen_out">장바구니에 담긴 상품 목록</strong>
        <ItemChoice
          checkId="checkBoxAll"
          checkbox="전체선택"
          isChecked={isAllChecked}
          handleCheckBox={handleAllCheck}
        />
        <ul className="list_cart">
          {productList.map(({ id, image, name, count, price, quantity }) => {
            return (
              <Item
                key={id}
                id={id}
                image={image}
                name={name}
                price={price}
                handleChange={() => {}}
                quantity={quantity}
                productList={productList}
                setProductList={setProductList}
                checkList={checkList}
                setCheckList={setCheckList}
                setTotalPrice={setTotalPrice}
              />
            );
          })}
        </ul>
        <button className="btn_alldelete">전체 삭제</button>
      </div>
      <div className="wrap_order">
        <strong className="tit_order">주문금액</strong>
        <dl className="list_order">
          <dt>상품금액</dt>
          <dd>{totalPrice.toLocaleString()}원</dd>
          <dt>배송비</dt>
          <dd>0원</dd>
          <dt className="type_total">총결제금액</dt>
          <dd className="type_total">
            <em className="emph_price">{totalPrice.toLocaleString()}원</em>
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
  );
};

export default GroupCart;
