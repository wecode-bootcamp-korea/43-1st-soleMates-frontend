import React, { useState } from 'react';
import './LinkUtil.scss';

const LinkUtil = props => {
  const { icoClass, icoName, typeCart } = props;
  const [totalCart, setTotalCart] = useState(99);
  return (
    <a href="#none" className={`link_util ${typeCart}`}>
      <span className={`ico_shop ${icoClass}`}>{icoName}</span>
      {typeCart && (
        <span className="num_util">
          <span className="screen_out">담은 상품 수</span>
          {`${totalCart >= 99 ? '99+' : totalCart}`}
          <span className="screen_out">개</span>
        </span>
      )}
    </a>
  );
};
LinkUtil.defaultProps = {
  icoClass: '',
  icoName: '',
  typeCart: '',
  totalCart: 0,
};
export default LinkUtil;
