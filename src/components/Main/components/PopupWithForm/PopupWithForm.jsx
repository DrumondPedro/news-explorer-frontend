import closeIcon from '../../../../assets/images/PopupWithForm/popup_close_Icon.svg';

function PopupWithForm({ children, title }) {
  return (
    <div className={`popup-with-form`}>
      <div className={`popup-with-form__content`}>
        <button className={`popup-with-form__close-button`}>
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
