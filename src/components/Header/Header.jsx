import { useContext, useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import useWindowDimension from 'use-window-dimensions';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { LoginContext } from '../../contexts/LoginContext';

import logoWhite from '../../assets/images/Header/logo_white.svg';
import logoBlack from '../../assets/images/Header/logo_black.svg';
import loguotWhite from '../../assets/images/Header/logout_icon_white.svg';
import loguotBlack from '../../assets/images/Header/logout_icon_black.svg';
import gridIcon from '../../assets/images/Header/menu_grid_icon.svg';
import gridIconBlack from '../../assets/images/Header/menu_grid_icon_black.svg';
import closeIcon from '../../assets/images/Header/close_icon.svg';

function Header({ children }) {
  const location = useLocation();
  const { width } = useWindowDimension();

  const { currentUser } = useContext(CurrentUserContext);
  const { isLoggedIn } = useContext(LoginContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSavedNewsPage, setIsSavedNewsPage] = useState(false);

  const handleOpeningMenuMobile = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLogoImage = () => {
    if (isMenuOpen) {
      return logoWhite;
    }
    if (isSavedNewsPage) {
      return logoBlack;
    }
    return logoWhite;
  };

  const getMenuButtonImage = () => {
    if (isMenuOpen) {
      return closeIcon;
    }
    if (isSavedNewsPage) {
      return gridIconBlack;
    }
    return gridIcon;
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
    ${isSavedNewsPage ? 'header__button--light-theme' : ''} 
    ${isLoggedIn ? '' : 'header__button--not-loged'}`}
      >
        <p
          className={`header__button-text ${
            isSavedNewsPage ? 'header__button-text--light-theme' : ''
          }`}
        >
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

  useEffect(() => {
    if (width > 580) {
      setIsMenuOpen(false);
    }

    setIsMenuOpen(false);
    setIsSavedNewsPage(location.pathname === '/saved-news');

    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        console.log('evt');
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [location.pathname, width]);

  return (
    <>
      <header
        className={`header ${isSavedNewsPage ? 'header--light-theme' : ''}`}
      >
        <div className='header__content'>
          <Link className='header__logo--link' to='/'>
            <img className='header__logo' src={getLogoImage()} alt='' />
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
