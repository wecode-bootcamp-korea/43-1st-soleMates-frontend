import React from 'react';
import './MainTitle.scss';

const MainTitle = props => {
  const { title, txt, url } = props;
  return (
    <div className="main_title">
      <strong className="tit_g">{title}</strong>
      <a href={url} className="link_more">
        {txt} <span className="ico_shop ico_arr" />
      </a>
    </div>
  );
};
export default MainTitle;
