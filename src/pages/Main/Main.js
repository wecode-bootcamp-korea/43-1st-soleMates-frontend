import React, { useState, useRef, useEffect } from 'react';
import Slide from './Slide/Slide';
import './Main.scss';

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainer = useRef();

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slides = [
    { id: 1, img_url: '../images/Main/@bnr_1440x900.jpeg' },
    { id: 2, img_url: '../images/Main/@bnr_1440x900.jpeg' },
    { id: 3, img_url: '../images/Main/@bnr_1440x900.jpeg' },
  ];
  return (
    <div className="main">
      <h2 className="screen_out">닥터마틴 메인</h2>
      <Slide slides={slides} />
      <div className="group_tit">
        <strong className="tit_g">Shop By STYLE</strong>
        <a href="#none" className="link_more">
          신상품 보러 가기 <span className="ico_shop ico_arr"></span>
        </a>
      </div>
      <ul className="list_products">
        <li>
          <a href="#none" className="link_products">
            <img
              src="../images/Main/@thumb_279x349.jpg"
              alt=""
              className="img_g"
            />
            <span className="txt_name">
              <strong className="screen_out">상품명 : </strong>HIGH TOPS
            </span>
          </a>
        </li>
        <li>
          <a href="#none" className="link_products">
            <img
              src="../images/Main/@thumb_279x349.jpg"
              alt=""
              className="img_g"
            />
            <span className="txt_name">
              <strong className="screen_out">상품명 : </strong>HIGH TOPS
            </span>
          </a>
        </li>
        <li>
          <a href="#none" className="link_products">
            <img
              src="../images/Main/@thumb_279x349.jpg"
              alt=""
              className="img_g"
            />
            <span className="txt_name">
              <strong className="screen_out">상품명 : </strong>HIGH TOPS
            </span>
          </a>
        </li>
        <li>
          <a href="#none" className="link_products">
            <img
              src="../images/Main/@thumb_279x349.jpg"
              alt=""
              className="img_g"
            />
            <span className="txt_name">
              <strong className="screen_out">상품명 : </strong>HIGH TOPS
            </span>
          </a>
        </li>
      </ul>
      <div className="bnr_public">
        <div className="bnr_text">
          <strong className="tit_bnr">RUN STAR LEGACY CX</strong>
          <p className="desc_bnr">
            굉장히 편안한 쿠셔닝과 가벼운 앵글 플랫폼의 미래 지향적인 스타일로
            <br />
            기존 루틴에 변화를 준 새로운 컬러의 스니커즈
          </p>
          <button type="button" className="btn_buy">
            구매하기
          </button>
        </div>
        <div className="bnr_img">
          <img src="../images/Main/@bnr_720x900.gif" />
        </div>
      </div>
      <div className="bnr_public">
        <div className="bnr_text type_left80">
          <strong className="tit_bnr">GET MOVING</strong>
          <p className="desc_bnr">
            굉장히 편안한 쿠셔닝과 가벼운 앵글 플랫폼의 미래 지향적인 스타일로
            <br />
            기존 루틴에 변화를 준 새로운 컬러의 스니커즈
          </p>
          <button type="button" className="btn_buy">
            구매하기
          </button>
        </div>
        <div className="bnr_img">
          <img src="../images/Main/@bnr_1440x900.jpg" />
        </div>
      </div>
      <div className="bnr_public">
        <div className="bnr_text type_right">
          <strong className="tit_bnr">GET MOVING</strong>
          <p className="desc_bnr">
            굉장히 편안한 쿠셔닝과 가벼운 앵글 플랫폼의 미래 지향적인 스타일로
            <br />
            기존 루틴에 변화를 준 새로운 컬러의 스니커즈
          </p>
          <button type="button" className="btn_buy">
            구매하기
          </button>
        </div>
        <div className="bnr_img">
          <img src="../images/Main/@bnr2_1440x900.jpg" />
        </div>
      </div>
      <div className="bnr_public">
        <div className="bnr_text">
          <strong className="tit_bnr">GET MOVING</strong>
          <p className="desc_bnr">
            굉장히 편안한 쿠셔닝과 가벼운 앵글 플랫폼의 미래 지향적인 스타일로
            <br />
            기존 루틴에 변화를 준 새로운 컬러의 스니커즈
          </p>
          <button type="button" className="btn_buy">
            구매하기
          </button>
        </div>
        <div className="bnr_img">
          <img src="../images/Main/@bnr3_1440x900.jpg" />
        </div>
      </div>
      <div className="group_tit">
        <strong className="tit_g">Trending Styles</strong>
        <a href="#none" className="link_more">
          베스트셀러 보기 <span className="ico_shop ico_arr"></span>
        </a>
      </div>
      <ul className="list_products">
        <li>
          <a href="#none" className="link_products">
            <img
              src="../images/Main/@thumb_279x349.jpg"
              alt=""
              className="img_g"
            />
            <span className="txt_name">
              <strong className="screen_out">상품명 : </strong>HIGH TOPS
            </span>
          </a>
        </li>
        <li>
          <a href="#none" className="link_products">
            <img
              src="../images/Main/@thumb_279x349.jpg"
              alt=""
              className="img_g"
            />
            <span className="txt_name">
              <strong className="screen_out">상품명 : </strong>HIGH TOPS
            </span>
          </a>
        </li>
        <li>
          <a href="#none" className="link_products">
            <img
              src="../images/Main/@thumb_279x349.jpg"
              alt=""
              className="img_g"
            />
            <span className="txt_name">
              <strong className="screen_out">상품명 : </strong>HIGH TOPS
            </span>
          </a>
        </li>
        <li>
          <a href="#none" className="link_products">
            <img
              src="../images/Main/@thumb_279x349.jpg"
              alt=""
              className="img_g"
            />
            <span className="txt_name">
              <strong className="screen_out">상품명 : </strong>HIGH TOPS
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Main;
