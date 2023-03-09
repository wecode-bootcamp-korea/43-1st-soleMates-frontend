import React from 'react';
import { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [totalCart, setTotalCart] = useState(99);
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
      <ul className="list_menu">
        <li>
          <a href="#none" className="link_menu">
            신발
          </a>
          <strong className="screen_out">중분류</strong>
          <div className="wrap_submenu">
            <dl className="list_submenu">
              <dt>
                <a href="#none" className="link_submenu">
                  NEW IN
                </a>
              </dt>
              <dd>
                <a href="#none" className="link_submenu">
                  여성
                </a>
              </dd>
              <dd>
                <a href="#none" className="link_submenu">
                  남성
                </a>
              </dd>
              <dd>
                <a href="#none" className="link_submenu">
                  부츠
                </a>
              </dd>
              <dd>
                <a href="#none" className="link_submenu">
                  슈즈
                </a>
              </dd>
            </dl>
            <dl className="list_submenu">
              <dt>
                <a href="#none" className="link_submenu">
                  BEST
                </a>
              </dt>
              <dd>
                <a href="#none" className="link_submenu">
                  여성
                </a>
              </dd>
              <dd>
                <a href="#none" className="link_submenu">
                  남성
                </a>
              </dd>
              <dd>
                <a href="#none" className="link_submenu">
                  부츠
                </a>
              </dd>
              <dd>
                <a href="#none" className="link_submenu">
                  슈즈
                </a>
              </dd>
            </dl>
            <dl className="list_submenu">
              <dt>
                <a href="#none" className="link_submenu">
                  BEST
                </a>
              </dt>
              <dd>
                <a href="#none" className="link_submenu">
                  여성
                </a>
              </dd>
              <dd>
                <a href="#none" className="link_submenu">
                  남성
                </a>
              </dd>
              <dd>
                <a href="#none" className="link_submenu">
                  부츠
                </a>
              </dd>
              <dd>
                <a href="#none" className="link_submenu">
                  슈즈
                </a>
              </dd>
            </dl>
            <dl className="list_submenu">
              <dt>
                <a href="#none" className="link_submenu">
                  BEST
                </a>
              </dt>
              <dd>
                <a href="#none" className="link_submenu">
                  여성
                </a>
              </dd>
              <dd>
                <a href="#none" className="link_submenu">
                  남성
                </a>
              </dd>
              <dd>
                <a href="#none" className="link_submenu">
                  부츠
                </a>
              </dd>
              <dd>
                <a href="#none" className="link_submenu">
                  슈즈
                </a>
              </dd>
            </dl>
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
        <a href="#none" className="link_util type_cart">
          <span className="ico_shop ico_cart">장바구니</span>
          <span className="num_util">
            <span className="screen_out">담은 상품 수</span>
            {`${totalCart >= 99 ? '99+' : totalCart}`}
            <span className="screen_out">개</span>
          </span>
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
