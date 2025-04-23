import { useContext, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import logoWite from '../../assets/images/Header/logo_wite.svg';
import logoBlack from '../../assets/images/Header/logo_black.svg';
import loguotWite from '../../assets/images/Header/logout_icon_wite.svg';
import loguotBlack from '../../assets/images/Header/logout_icon_black.svg';

function Header({ children }) {
  const location = useLocation();

  const { currentUser } = useContext(CurrentUserContext);

  const [isSavedNewsPage, setIsSavedNewsPage] = useState(false);
  const [isloged, setIsloged] = useState(true);

  useEffect(() => {
    setIsSavedNewsPage(location.pathname === '/saved-news');
  }, [location.pathname]);

  return (
    <header
      className={`header ${isSavedNewsPage ? 'header--light-theme' : ''}`}
    >
      <div className='header__content'>
        <img
          className='header__logo'
          src={isSavedNewsPage ? logoBlack : logoWite}
          alt=''
        />
        {children}
        <button
          className={`header__button 
          ${isSavedNewsPage ? 'header__button--light-theme' : ''} 
          ${isloged ? '' : 'header__button--not-loged'}`}
        >
          <p
            className={`header__button-text ${
              isSavedNewsPage ? 'header__button-text--light-theme' : ''
            }`}
          >
            {isloged ? `${currentUser.name}` : 'Entrar'}
          </p>
          {isloged && (
            <img
              className='header__button-image'
              src={isSavedNewsPage ? loguotBlack : loguotWite}
              alt=''
            />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
