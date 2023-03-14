import React from 'react';
import { Link } from 'react-router-dom';
import './BnrPublic.scss';

const BnrPublic = props => {
  const { title, txt, img, btn, link, className } = props;
  return (
    <div className="bnr_public">
      <div className={`bnr_text ${className}`}>
        <strong className="tit_bnr">{title}</strong>
        <p className="desc_bnr">{txt}</p>
        <Link to={link} type="button" className="btn_buy">
          {btn}
        </Link>
      </div>
      <div className="bnr_img">
        <img src={img} className="img_g" alt={title} />
      </div>
    </div>
  );
};
export default BnrPublic;
