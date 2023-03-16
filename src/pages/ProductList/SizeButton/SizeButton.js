import React, { useState } from 'react';

const SizeButton = ({
  id,
  title,
  className,
  selectedSize,
  setSelectedSize,
}) => {
  const [btnColor, setBtnColor] = useState('');

  const handleClick = title => {
    if (btnColor === '') {
      setBtnColor('yellow');
      setSelectedSize(title);
    } else {
      setBtnColor('');
    }
  };

  // state boolean 형태로 생성
  // 버튼에 onClick 이벤트
  // 클릭에 따른 함수 생성
  // 함수 안에서는 setState();
  // state 값에 따라 버튼의 className이 변경

  return (
    <>
      <button
        className={className}
        onClick={() => handleClick(title)}
        style={{ backgroundColor: btnColor }}
        key={id}
      >
        <p className={`title_${title}`}>{title}</p>
      </button>

      {/* <div>
        {ARR.map(({ id, name, age }) => (
          <div>
            <span>아이디는 {id}</span>
            <span>이름은 {name}</span>
            <span>나이는 {age}</span>
          </div>
        ))}
      </div> */}
    </>
  );
};
export default SizeButton;

// const ARR = [
//   { id: 1, name: 'aa', age: '10' },
//   { id: 2, name: 'bb', age: '10' },
//   { id: 3, name: 'cc', age: '10' },
// ];
