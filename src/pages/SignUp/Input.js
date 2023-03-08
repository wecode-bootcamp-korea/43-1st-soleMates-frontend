import React from 'react';
import './SignUp.scss';

const Input = props => {
  const { condition, handleInput, value } = props;
  return (
    <div className="input_box">
      <label className={condition}>이름</label>
      <input
        name="name"
        type="text"
        className="input"
        onChange={handleInput}
        value={value}
        placeholder="이름"
      />
    </div>
  );
};

export default Input;
