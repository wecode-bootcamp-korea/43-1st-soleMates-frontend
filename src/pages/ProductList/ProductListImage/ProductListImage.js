import React, { useState, useEffect } from 'react';
import WrapInfo from '../WrapInfo/WrapInfo';
import SizeButton from '../SizeButton/SizeButton';
import { BTN_COLOR } from './BTN_COLOR';
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
  const [selectedSize, setSelectedSize] = useState(0);

  // 장바구니에 추가
  const addCart = () => {
    console.log(selectedSize);
    // 보낼 데이터 추가 -> size : selectedSize
    fetch('http://', {
      // method: 'POST',
      // headers:{token,contentsType}
      // body:{
      //   id:id,
      //   size:selectedSize
      // }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          // navigate('/cart');
        } else {
          alert('다시 시도해주세요!');
        }
      });
  };

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

        {modal && (
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
                            {price.toLocaleString()}
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
                      <div className="modal_box_product_guide_text_containter">
                        <span className="modal_box_product_guide_text_containter_small">
                          작아요
                        </span>
                        <span className="modal_box_product_guide_text_containter_regular">
                          적당해요
                        </span>
                        <span className="modal_box_product_guide_text_containter_big">
                          커요
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="modal_box_product_body_containter">
                    <div className="modal_box_product_body_head">
                      <p className="modal_box_product_body_title">
                        사이즈(mm)선택
                      </p>
                    </div>
                    <div className="modal_box_product_body_option">
                      {BTN_COLOR.map(({ title, className }) => (
                        <SizeButton
                          key={id}
                          title={title}
                          className={className}
                          selectedSize={selectedSize}
                          setSelectedSize={setSelectedSize}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="modal_box_product_base_foot">
                    <div className="modal_box_product_base_foot_layer">
                      <button
                        className="modal_box_product_foot_button"
                        onClick={addCart}
                      >
                        장바구니 담기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
