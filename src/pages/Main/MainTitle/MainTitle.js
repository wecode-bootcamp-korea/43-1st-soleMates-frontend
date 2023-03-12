import React from 'react';
import { Link } from 'react-router-dom';
import './MainTitle.scss';

const MainTitle = props => {
  const { title, txt, url } = props;
  return (
    <div className="main_title">
      <strong className="tit_g">{title}</strong>
      <Link to={url} className="link_more">
        {txt} <span className="ico_shop ico_arr" />
      </Link>
    </div>
  );
};
export default MainTitle;
