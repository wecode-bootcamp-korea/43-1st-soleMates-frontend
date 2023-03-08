import React, { useState, useRef, useEffect } from 'react';
import Slide from './Slide/Slide';
import MainTitle from './MainTitle/MainTitle';
import ListProducts from './ListProducts/ListProducts';
import BnrPublic from './BnrPublic/BnrPublic';

import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <h2 className="screen_out">닥터마틴 메인</h2>
      <Slide slides={slides} />
      <MainTitle
        title={'Shop By STYLE'}
        txt={'신상품 보러 가기'}
        url={'#none'}
      />
      <ListProducts product={NEW_PRODUCT_LIST} />
      <BnrPublic
        title={'RUN STAR LEGACY C'}
        txt={
          '굉장히 편안한 쿠셔닝과 가벼운 앵글 플랫폼의 미래 지향적인 스타일로 기존 루틴에 변화를 준 새로운 컬러의 스니커즈'
        }
        img={'../images/Main/@bnr_720x900.gif'}
        btn={'구매하기'}
        link={'#none'}
      />
      <BnrPublic
        title={'GET MOVING'}
        txt={
          ' 굉장히 편안한 쿠셔닝과 가벼운 앵글 플랫폼의 미래 지향적인 스타일로기존 루틴에 변화를 준 새로운 컬러의 스니커즈'
        }
        img={'../images/Main/@bnr_1440x900.jpg'}
        btn={'구매하기'}
        link={'#none'}
        className={'type_left80'}
      />
      <BnrPublic
        title={'GET MOVING'}
        txt={
          ' 굉장히 편안한 쿠셔닝과 가벼운 앵글 플랫폼의 미래 지향적인 스타일로기존 루틴에 변화를 준 새로운 컬러의 스니커즈'
        }
        img={'../images/Main/@bnr2_1440x900.jpg'}
        btn={'구매하기'}
        link={'#none'}
        className={'type_right'}
      />
      <BnrPublic
        title={'GET MOVING'}
        txt={
          ' 굉장히 편안한 쿠셔닝과 가벼운 앵글 플랫폼의 미래 지향적인 스타일로기존 루틴에 변화를 준 새로운 컬러의 스니커즈'
        }
        img={'../images/Main/@bnr3_1440x900.jpg'}
        btn={'구매하기'}
        link={'#none'}
      />
      <MainTitle
        title={'Trending Styles'}
        txt={'베스트셀러 보기'}
        url={'#none'}
      />
      <ListProducts product={BEST_PRODUCT_LIST} />
    </div>
  );
};

const slides = [{ id: 1, img_url: '../images/Main/@bnr_1440x900.jpeg' }];

const NEW_PRODUCT_LIST = [
  {
    id: 1,
    url: '#none',
    name: 'HIGH TOPS',
    img: '../images/Main/@thumb_279x349.jpg',
  },
  {
    id: 2,
    url: '#none',
    name: '가나다라마바사',
    img: '../images/Main/@thumb_279x349.jpg',
  },
  {
    id: 3,
    url: '#none',
    name: 'ABCDEFG',
    img: '../images/Main/@thumb_279x349.jpg',
  },
  {
    id: 4,
    url: '#none',
    name: 'HIGH TOPS',
    img: '../images/Main/@thumb_279x349.jpg',
  },
];

const BEST_PRODUCT_LIST = [
  {
    id: 1,
    url: '#none',
    name: '베스트 HIGH TOPS',
    img: '../images/Main/@thumb_279x349.jpg',
  },
  {
    id: 2,
    url: '#none',
    name: '가나다라마바사',
    img: '../images/Main/@thumb_279x349.jpg',
  },
  {
    id: 3,
    url: '#none',
    name: 'ABCDEFG',
    img: '../images/Main/@thumb_279x349.jpg',
  },
  {
    id: 4,
    url: '#none',
    name: 'HIGH TOPS',
    img: '../images/Main/@thumb_279x349.jpg',
  },
];

export default Main;
