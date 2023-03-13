import React from 'react';
import './ModalToCart.scss';

const ModalToCart = props => {
  const { close } = props;

  // const closeModal = () => {
  //   setCartModal(false);
  // };

  return (
    <div onClick={close} className="modal_to_cart">
      <div className="modal_box">
        <button className="close_button" onClick={close}>
          ╳
        </button>
      </div>
    </div>
  );
};

export default ModalToCart;
