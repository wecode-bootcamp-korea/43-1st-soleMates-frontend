import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="tit_logo">
        <a href="/" className="link_logo">
          <img src="../images/Header/img_logo.png" alt="" className="img_g" />
        </a>
      </h1>
      <h2 className="screen_out">닥터마틴 메인 메뉴</h2>
      <ul className="list_menu">
        <li>
          <a href="#none" className="link_menu">
            신발
          </a>
          <div className="wrap_submenu">
            <ul className="list_submenu">
              <li>구두</li>
              <li>부츠</li>
              <li>샌들</li>
              <li>전체보기</li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#none" className="link_menu">
            신발
          </a>
        </li>
        <li>
          <a href="#none" className="link_menu">
            신발
          </a>
        </li>
        <li>
          <a href="#none" className="link_menu">
            신발
          </a>
        </li>
      </ul>
      <div className="util_menu">
        <a href="#none" className="link_util">
          <span className="ico_shop">로그인</span>
        </a>
        <a href="#none" className="link_util">
          <span className="ico_shop ico_cart">장바구니</span>
        </a>
        <a href="#none" className="link_util">
          <span className="ico_shop ico_wish">찜 목록</span>
        </a>
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
