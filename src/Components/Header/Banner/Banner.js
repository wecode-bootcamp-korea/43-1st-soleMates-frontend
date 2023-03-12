import React, { useRef, useState, useEffect } from 'react';
import './Banner.scss';
const Banner = () => {
  const TOTAL_SLIDES = TOP_SLIDE.length - 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide => currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <div className="banner">
      <div className="area_bnr" ref={slideRef}>
        {TOP_SLIDE.map(({ id, title, desc }) => (
          <div className="wrap_bnr" key={id}>
            <div className="group_bnr">
              <strong className="tit_noti">{title}</strong>
              <p className="desc_noti">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="btn_arr" onClick={PrevSlide}>
        <span className="ico_shop">이전</span>
      </button>
      <button type="button" className="btn_arr btn_next" onClick={nextSlide}>
        <span className="ico_shop">다음</span>
      </button>
    </div>
  );
};

const TOP_SLIDE = [
  {
    id: 1,
    title: 'Notice',
    desc: '로그인이 어려우실경우 FAQ를 참조해주세요',
  },
  {
    id: 2,
    title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
    desc: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
  },
];
export default Banner;
