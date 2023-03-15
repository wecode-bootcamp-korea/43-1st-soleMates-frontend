import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LinkUtil.scss';

const LinkUtil = props => {
  const { icoClass, icoName, typeCart } = props;
  const [totalCart, setTotalCart] = useState(99);

  const navigate = useNavigate();
  const saveUserAccount = localStorage.getItem('token', '로그인 상태');

  const handleAccount = () => {
    if (icoName === '로그인') {
      // 로그인 로직
      if (saveUserAccount === null) {
        navigate('/signup');
      } else {
        if (window.confirm('정말 로그아웃 하시겠습니까?')) {
          localStorage.removeItem('token');
          alert('로그아웃 되었습니다.');
        } else {
          return;
        }
      }
    } else if (icoName === '장바구니') {
      // 장바구니 로직
      if (saveUserAccount === null) {
        alert('회원만 사용이 가능합니다.');
        navigate('/signup');
      } else {
        navigate('/cart');
      }
    } else if (icoName === '찜목록') {
      // 찜 목록 로직
      if (saveUserAccount === null) {
        alert('회원만 사용이 가능합니다.');
        navigate('/signup');
      } else {
        navigate('#none');
      }
    }
  };

  return (
    <button
      className={`link_util ${typeCart}`}
      onClick={handleAccount}
      type="button"
    >
      <span className={`ico_shop ${icoClass}`}>{icoName}</span>
      {typeCart && (
        <span className="num_util">
          <span className="screen_out">담은 상품 수</span>
          {`${totalCart >= 99 ? '99+' : totalCart}`}
          <span className="screen_out">개</span>
        </span>
      )}
    </button>
  );
};
LinkUtil.defaultProps = {
  typeLogin: '',
  icoClass: '',
  icoName: '',
  typeCart: '',
  totalCart: 0,
};
export default LinkUtil;
