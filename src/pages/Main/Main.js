import React, { useState, useRef, useEffect } from 'react';
import MainSlide from './MainSlide/MainSlide';
import MainTitle from './MainTitle/MainTitle';
import ListProducts from './ListProducts/ListProducts';
import BnrPublic from './BnrPublic/BnrPublic';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <h2 className="screen_out">닥터마틴 메인</h2>
      <MainSlide />
      <MainTitle title="Shop By STYLE" txt="신상품 보러 가기" url={'#none'} />
      <ListProducts product={NEW_PRODUCT_LIST} />
      <BnrPublic
        title="RUN STAR LEGACY C"
        txt="굉장히 편안한 쿠셔닝과 가벼운 앵글 플랫폼의 미래 지향적인 스타일로 기존 루틴에 변화를 준 새로운 컬러의 스니커즈"
        img="../images/Main/@bnr_720x900.gif"
        btn="구매하기"
        link="/detail/1"
      />
      <BnrPublic
        title="GET MOVING"
        txt=" 굉장히 편안한 쿠셔닝과 가벼운 앵글 플랫폼의 미래 지향적인 스타일로기존 루틴에 변화를 준 새로운 컬러의 스니커즈"
        img="../images/Main/@bnr_1440x900.jpg"
        btn="구매하기"
        link="/detail/2"
        className="type_left80"
      />
      <BnrPublic
        title="GET MOVING"
        txt=" 굉장히 편안한 쿠셔닝과 가벼운 앵글 플랫폼의 미래 지향적인 스타일로기존 루틴에 변화를 준 새로운 컬러의 스니커즈"
        img="../images/Main/@bnr2_1440x900.jpg"
        btn="구매하기"
        link="/detail/3"
        className="type_right"
      />
      <BnrPublic
        title="GET MOVING"
        txt="굉장히 편안한 쿠셔닝과 가벼운 앵글 플랫폼의 미래 지향적인 스타일로기존 루틴에 변화를 준 새로운 컬러의 스니커즈"
        img="../images/Main/@bnr3_1440x900.jpg"
        btn="/detail/4"
        link="#none"
      />
      <MainTitle title="Trending Styles" txt="베스트셀러 보기" url="#none" />
      <ListProducts product={BEST_PRODUCT_LIST} />
    </div>
  );
};

const NEW_PRODUCT_LIST = [
  {
    id: 1,
    url: '/detail/1',
    name: 'HIGH TOPS',
    img: '../images/Main/@thumb_500x750.jpg',
  },
  {
    id: 2,
    url: '/detail/2',
    name: '가나다라마바사',
    img: '../images/Main/@thumb_506x524.png',
  },
  {
    id: 3,
    url: '/detail/3',
    name: 'ABCDEFG',
    img: '../images/Main/@thumb_620x371.jpg',
  },
  {
    id: 4,
    url: '/detail/4',
    name: 'HIGH TOPS',
    img: '../images/Main/@thumb2_500x750.jpg',
  },
];

const BEST_PRODUCT_LIST = [
  {
    id: 1,
    url: '/detail/1',
    name: '베스트 HIGH TOPS',
    img: '../images/Main/@thumb_500x750.jpg',
  },
  {
    id: 2,
    url: '/detail/2',
    name: '가나다라마바사',
    img: '../images/Main/@thumb_506x524.png',
  },
  {
    id: 3,
    url: '/detail/3',
    name: 'ABCDEFG',
    img: '../images/Main/@thumb_620x371.jpg',
  },
  {
    id: 4,
    url: '/detail/4',
    name: 'HIGH TOPS',
    img: '../images/Main/@thumb2_500x750.jpg',
  },
];

export default Main;
