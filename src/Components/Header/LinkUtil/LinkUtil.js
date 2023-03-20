import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LinkUtil.scss';

const LinkUtil = props => {
  const { icoClass, icoName, typeCart } = props;
  const [cartList, setCartList] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    cartList.forEach(item => {
      const count = item.quantity;
      setTotalCart(prev => prev + count);
    });
  }, []);

  const navigate = useNavigate();
  const saveUserAccount = localStorage.getItem('token');

  const alertMsg = {
    장바구니: { truePath: '/login', falsePath: '/cart' },
    찜목록: { truePath: '/signup', falsePath: '#' },
  };

  const handleAccount = () => {
    if (icoName === '로그인') {
      // 로그인 로직
      if (saveUserAccount === null) {
        navigate('/login');
      } else {
        if (window.confirm('정말 로그아웃 하시겠습니까?')) {
          localStorage.removeItem('token');
          alert('로그아웃 되었습니다.');
        } else {
          return;
        }
      }
    } else {
      if (saveUserAccount === null) {
        alert('회원만 사용이 가능합니다!');
        navigate(alertMsg[icoName].truePath);
      } else {
        navigate(alertMsg[icoName].falsePath);
      }
    }
  };
  useEffect(() => {
    // fetch 요청 전문 예시
    fetch('http://10.58.52.169:3000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8', //필수로 넣어야함
        Authorization: saveUserAccount,
      },
    })
      .then(response => response.json())
      .then(data => {
        setCartList(data.cartData);
      });
  }, [setCartList]);

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
