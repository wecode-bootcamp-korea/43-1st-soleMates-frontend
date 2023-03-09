import React from 'react';
import './BnrPublic.scss';

const BnrPublic = props => {
  const { title, txt, img, btn, link, className } = props;
  return (
    <div className="bnr_public">
      <div className={`bnr_text ${className}`}>
        <strong className="tit_bnr">{title}</strong>
        <p className="desc_bnr">{txt}</p>
        <a href={link} type="button" className="btn_buy">
          {btn}
        </a>
      </div>
      <div className="bnr_img">
        <img src={img} className="img_g" />
      </div>
    </div>
  );
};
export default BnrPublic;
