import React, { useState } from 'react';
import WrapInfo from '../WrapInfo/WrapInfo';
import './ProductListImage.scss';

const ProductListImage = ({
  id,
  image,
  title,
  price,
  discount,
  discountRate,
}) => {
  const [color, setColor] = useState('');
  const [modal, setModal] = useState(false);
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="product_list_image"
      key={id}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <div className="list_box">
        <div className="product_list_box_">
          <div className="like_button">
            <button
              onClick={() => setColor(!color)}
              className={color ? 'on' : ''}
            >
              <span className="ico_shop ico_like" />
            </button>
          </div>

          <img className="list_image" src={image} alt="product" />
          {isHover ? (
            <button
              className="product_list_cart"
              onClick={() => setModal(true)}
            >
              장바구니담기
            </button>
          ) : (
            <button
              className="product_list_cart_hover"
              onClick={() => setModal(true)}
            >
              장바구니담기
            </button>
          )}
        </div>
        {modal === true ? (
          <div className="modal_background">
            <div className="modal_box">
              <div className="modal_box_option">
                옵션
                <button
                  onClick={() => setModal(false)}
                  className="ico_shop modal_close"
                  type="button"
                >
                  <span className="ico_shop modal_close" />
                  닫기
                </button>
              </div>
              <div className="modal_box_base">
                <div className="modal_box_article">
                  <div className="modal_box_product_info_container">
                    <div className="modal_box_product_image">
                      <img
                        className="modal_box_product_image_shot"
                        src={image}
                      />
                    </div>
                    <div className="modal_box_product_contents">
                      <h1 className="modal_box_product_contents_title">
                        {title}
                      </h1>
                      <p className="modal_box_product_contents_color">
                        컬러 : 블랙(수정예정)
                      </p>
                      <div className="modal_box_product_price">
                        가격
                        <p className="modal_box_product_price_wrapper">
                          <span className="modal_box_product_price_wrapper_in">
                            {price}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="modal_box_product_guide_container">
                    <p className="modal_box_product_guide_title">정사이즈</p>
                    <div className="modal_box_product_guide_review">
                      <div className="modal_box_product_guide_review_bar">
                        <span className="modal_box_product_guide_review_bar_icon">
                          <span className="modal_box_product_guide_review_bar_icon_out" />
                          <p className="modal_box_product_guide_review_bar_icon_line" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <WrapInfo
          title={title}
          price={price}
          discount={discount}
          discountRate={discountRate}
        />
      </div>
    </div>
  );
};
export default ProductListImage;
