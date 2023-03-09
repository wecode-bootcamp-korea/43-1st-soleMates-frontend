import React from 'react';
import { useState, useEffect } from 'react';
import './Header.scss';
import ListMenu from './ListMenu/ListMenu';
import LinkUtil from './LinkUtil/LinkUtil';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      const threshold = 100; // 스크롤 위치를 지정합니다.

      if (scrollTop > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header${isSticky ? ' fixed' : ''}`}>
      <h1 className="tit_logo">
        <a href="/" className="link_logo">
          <img src="../images/Header/img_logo.png" alt="" className="img_g" />
        </a>
      </h1>
      <h2 className="screen_out">닥터마틴 메인 메뉴</h2>
      <ListMenu />
      <div className="util_menu">
        <LinkUtil icoClass={''} icoName={'로그인'} typeCart={''} />
        <LinkUtil icoClass={'ico_cart'} icoName={'장바구니'} typeCart={true} />
        <LinkUtil icoClass={'ico_wish'} icoName={'찜목록'} typeCart={''} />
        <form method="post" action="#none" className="form_search">
          <fieldset>
            <legend className="screen_out">검색</legend>
            <input
              type="text"
              className="inp_search"
              placeholder="검색어"
              title="검색어 입력"
            />
            <button type="submit" className="btn_search">
              <span className="ico_shop ico_search">검색</span>
            </button>
          </fieldset>
        </form>
      </div>
    </header>
  );
};

export default Header;
