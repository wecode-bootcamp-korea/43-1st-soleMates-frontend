import React from 'react';
import './Slide.scss';

const Slide = ({ slides, currentIndex }) => {
  console.log(currentIndex);
  return (
    <div
      className="group_bnr"
      style={{
        transform: `translateX(${
          (-100 / slides.length) * (0.5 + currentIndex)
        }%)`,
      }}
    >
      {slides.map((items, index) => (
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
      ))}
    </div>
  );
};
export default Slide;
