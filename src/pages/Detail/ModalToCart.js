import React from 'react';
import './ModalToCart.scss';

const ModalToCart = props => {
  const { close } = props;

  // const closeModal = () => {
  //   setCartModal(false);
  // };

  return (
    <div className="modal_to_cart">
      <button className="close_button" onClick={close}>
        ╳
      </button>
    </div>
  );
};

export default ModalToCart;
