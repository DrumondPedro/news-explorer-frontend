import { useContext, useEffect } from 'react';

import { PopupContext } from '../../../../contexts/PopupContext';

import closeIcon from '../../../../assets/images/PopupWithForm/popup_close_Icon.svg';

function PopupWithForm({ children, title }) {
  const { handleClosePopup } = useContext(PopupContext);

  function handlesClickAway(evt) {
    if (evt.target.className === 'popup-with-form') {
      handleClosePopup();
    }
  }

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      handleClosePopup();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  return (
    <div className={`popup-with-form`} onClick={handlesClickAway}>
      <div className={`popup-with-form__content`}>
        <button
          className={`popup-with-form__close-button`}
          onClick={handleClosePopup}
        >
          <img
            src={closeIcon}
            alt='Ícone de um x'
            className='popup-with-form__close-image'
          />
        </button>
        <h2 className='popup-with-form__title'>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default PopupWithForm;
