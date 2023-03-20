import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LinkUtil.scss';

const LinkUtil = props => {
  const { icoClass, icoName, typeCart } = props;
  const [cartList, setCartList] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));

  useEffect(() => {
    // fetch 요청 전문 예시
    fetch('http://10.58.52.94:3000/carts', {
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
  }, []);

  useEffect(() => {
    let count = 0;
    cartList.forEach(item => {
      count += item.quantity;
    });
    setTotalCart(count);
  }, [cartList]);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const saveUserAccount = localStorage.getItem('token');

  // const handleLogout = () => {
  //   if (window.confirm('정말 로그아웃 하시겠습니까?')) {
  //     localStorage.removeItem('token');
  //     setIsLoggedIn(false);
  //     alert('로그아웃 되었습니다.');
  //   } else {
  //     return;
  //   }
  // };

  const alertMsg = {
    장바구니: { truePath: '/login', falsePath: '/cart', isLoggedIn: true },
    찜목록: { truePath: '/login', falsePath: '#', isLoggedIn: true },
  };

  const handleAccount = () => {
    if (icoName === '로그인') {
      if (!isLoggedIn) {
        navigate('/login');
        return;
      } else if (isLoggedIn !== null) {
        if (window.confirm('정말 로그아웃 하시겠습니까?')) {
          setIsLoggedIn(localStorage.removeItem('token'));
          alert('로그아웃 되었습니다.');
          return;
        } else {
          return;
        }
      }
    } else if (icoName) {
      if (saveUserAccount === null) {
        alert('회원만 사용이 가능합니다!');
        navigate(alertMsg[icoName].truePath);
      } else {
        navigate(alertMsg[icoName].falsePath);
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
