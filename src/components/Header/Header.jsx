import { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import useWindowDimension from 'use-window-dimensions';

import Form from '../Main/components/PopupWithForm/components/Form/Form';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { LoginContext } from '../../contexts/LoginContext';
import { LocationContext } from '../../contexts/LocationContext';
import { LigthThemeContext } from '../../contexts/LigthThemeContext';
import { PopupContext } from '../../contexts/PopupContext';

import logoWhite from '../../assets/images/Header/logo_white.svg';
import logoBlack from '../../assets/images/Header/logo_black.svg';
import loguotWhite from '../../assets/images/Header/logout_icon_white.svg';
import loguotBlack from '../../assets/images/Header/logout_icon_black.svg';
import gridIcon from '../../assets/images/Header/menu_grid_icon.svg';
import gridIconBlack from '../../assets/images/Header/menu_grid_icon_black.svg';
import closeIcon from '../../assets/images/Header/close_icon.svg';

function Header({ children }) {
  const { width } = useWindowDimension();

  const { currentUser } = useContext(CurrentUserContext);
  const { isLoggedIn } = useContext(LoginContext);
  const { isSavedNewsPage } = useContext(LocationContext);
  const { addLigthTheme, removeLigthTheme } = useContext(LigthThemeContext);
  const { handleOpenPopup } = useContext(PopupContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpeningMenuMobile() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      if (isSavedNewsPage) {
        addLigthTheme();
      }
      return;
    }
    setIsMenuOpen(true);
    removeLigthTheme();
  }

  function getMenuButtonImage() {
    if (isMenuOpen) {
      return closeIcon;
    }
    if (isSavedNewsPage) {
      return gridIconBlack;
    }
    return gridIcon;
  }

  function openTestPopup() {
    handleOpenPopup(PopupTest);
  }

  const PopupTest = {
    title: 'Entrar',
    children: (
      <Form buttonText={'Entrar'} linkText={'Inscreva-se'}>
        {/* <LoginForm></LoginForm> */}
      </Form>
    ),
  };

  const handleHeaderButtonSelection = () => {
    if (width <= 580) {
      return (
        <button
          onClick={handleOpeningMenuMobile}
          className='header__menu-button'
        >
          <img
            src={getMenuButtonImage()}
            alt='Ícone de um x'
            className='header__menu-button-image'
          />
        </button>
      );
    }
    return (
      <button
        className={`header__button 
          ${isLoggedIn ? '' : 'header__button--not-loged'}`}
        onClick={openTestPopup}
      >
        <p className={`header__button-text`}>
          {isLoggedIn ? `${currentUser.name}` : 'Entrar'}
        </p>
        {isLoggedIn && (
          <img
            className='header__button-image'
            src={isSavedNewsPage ? loguotBlack : loguotWhite}
            alt=''
          />
        )}
      </button>
    );
  };

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      console.log('evt');
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    setIsMenuOpen(false);

    if (isSavedNewsPage) {
      addLigthTheme();
    } else {
      removeLigthTheme();
    }

    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isSavedNewsPage]);

  return (
    <>
      <header className='header'>
        <div className='header__content'>
          <Link className='header__logo--link' to='/'>
            <img
              className='header__logo'
              src={isMenuOpen || !isSavedNewsPage ? logoWhite : logoBlack}
              alt=''
            />
          </Link>
          {width > 580 && children}
          {handleHeaderButtonSelection()}
        </div>
      </header>
      {isMenuOpen && (
        <div className='header-menu-popup'>
          {children}
          <button
            className={`header__button ${
              isLoggedIn ? '' : 'header__button--not-loged'
            }`}
          >
            <p className={`header__button-text`}>
              {isLoggedIn ? `${currentUser.name}` : 'Entrar'}
            </p>
            {isLoggedIn && (
              <img className='header__button-image' src={loguotWhite} alt='' />
            )}
          </button>
        </div>
      )}
    </>
  );
}

export default Header;
