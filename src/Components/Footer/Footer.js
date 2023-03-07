import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="inner_footer">
        <div className="wrap_info">
          <strong className="screen_out">닥터마틴 서비스 이용정보</strong>
          <ul className="list_info">
            <li>
              <span className="screen_out">주소 : </span>서울특별시 마포구
              양화로 10길 45 1층 닥터마틴
            </li>
            <li>사업자 번호 : 105-81-94802</li>
            <li>통신판매업 신고 : 2013 - 서울마포 - 1212호</li>
            <li>개인정보관리책임자 : 이태영</li>
            <li>대표이사 : 챈카키데렉</li>
            <li>문의전화 : 1544-6486 (10AM ~ 5PM 점심시간 12:00~13:00)</li>
            <li>이메일 : hello@drmartens.co.kr</li>
            <li>팩스 : 02-431-7651</li>
            <li>호스팅 제공 : (주)가비아씨엔에스</li>
          </ul>
          <p className="txt_copy">
            All Images and Contents Copyright &copy; 2019 Dr. Martens-Airwair
            Korea Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
