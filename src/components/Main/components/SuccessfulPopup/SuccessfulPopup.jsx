import { useContext } from 'react';

import { PopupContext } from '../../../../contexts/PopupContext';

import closeIcon from '../../../../assets/images/SuccessfulPopup/popup_close_Icon.svg';

function SuccessfulPopup({ title }) {
  const { handleClosePopup, handleOpenPopup, loginPopup } =
    useContext(PopupContext);

  function openLoginPopup() {
    handleOpenPopup(loginPopup);
  }

  return (
    <div className={`successful-popup`}>
      <div className={`successful-popup__content`}>
        <button
          className={`successful-popup__close-button`}
          onClick={handleClosePopup}
        >
          <img
            src={closeIcon}
            alt='Ícone de um x'
            className='successful-popup__close-image'
          />
        </button>
        <h2 className='successful-popup__title'>{title}</h2>
        <a className='successful-popup__link' onClick={openLoginPopup}>
          Entrar
        </a>
      </div>
    </div>
  );
}

export default SuccessfulPopup;
