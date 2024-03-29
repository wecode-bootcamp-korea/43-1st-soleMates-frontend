import React from 'react';
import './ItemChoice.scss';

const ItemChoice = props => {
  const { checkbox, checkId, isChecked, handleCheckBox } = props;

  return (
    <span className="item_choice">
      {/*
        체크박스 마다 id값과  htmlFor을 동일하게 변경해주세요.
        id과  htmlFor는 체크박스마다 달라야합니다.

        이해가 안가신다면 김수미에게 슬랙 주세요.
      */}
      <input
        type="checkbox"
        id={checkId}
        name={checkId}
        checked={isChecked}
        className="inp_check"
        onChange={handleCheckBox}
      />
      <label htmlFor={checkId} className="lab_check">
        <span className="ico_shop ico_check"></span>
      </label>
      {checkbox && <span className="txt_choice">{checkbox}</span>}
      {/* 체크박스 옆에 텍스트가 필요할때 */}
    </span>
  );
};

export default ItemChoice;
