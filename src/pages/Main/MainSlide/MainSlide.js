import React, { useState, useRef, useEffect } from 'react';
import './MainSlide.scss';

const MainSlide = props => {
  const slideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlide = slides.length - 1;

  const nextButton = () => {
    if (currentSlide >= totalSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <div className="main_slide">
      <strong className="screen_out">메인 배너 슬라이드</strong>
      <ul className="list_slide" ref={slideRef}>
        {slides.map(items => (
          <li key={items.id}>
            <div
              key={items.id}
              className="bnr_main"
              style={{
                backgroundImage: `url(${items.img_url})`,
              }}
            >
              <strong className="tit_bnr">VARSITY STYLE</strong>
              <p className="txt_bnr">
                체인 스티치로 장식한 컨버스 워드마크가
                <br />
                올스타 패치와 조화를 이루면서 레트로한 무드로 재해석된
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button type="button" className="btn_arr btn_prev" onClick={PrevSlide}>
        <span className="ico_shop">이전</span>
      </button>
      <button type="button" className="btn_arr btn_next" onClick={nextButton}>
        <span className="ico_shop">다음</span>
      </button>
    </div>
  );
};
export default MainSlide;

const slides = [
  { id: 1, img_url: '../images/Main/@bnr_1440x900.jpeg' },
  { id: 2, img_url: '../images/Main/@bnr2_1440x900.png' },
  { id: 3, img_url: '../images/Main/@bnr3_1440x900.png' },
];
