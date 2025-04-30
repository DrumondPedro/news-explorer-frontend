import { useContext, useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import useWindowDimension from 'use-window-dimensions';

import { LoginContext } from '../../contexts/LoginContext';
import { LocationContext } from '../../contexts/LocationContext';

function Navigation() {
  const { width } = useWindowDimension();

  const { isLoggedIn } = useContext(LoginContext);
  const { isSavedNewsPage } = useContext(LocationContext);

  const customClassName = ({ isActive }) => {
    if (width <= 580) {
      return 'navigation__link';
    }
    return (
      'navigation__link' +
      (isActive ? ' navigation__link--active' : '') +
      (isActive && isSavedNewsPage
        ? ' navigation__link--active--light-theme'
        : '') +
      (isSavedNewsPage ? ' navigation__link--light-theme' : '')
    );
  };

  return (
    <nav className='navigation'>
      <NavLink to='/' className={customClassName}>
        Início
      </NavLink>
      {isLoggedIn && (
        <NavLink to='/saved-news' className={customClassName}>
          Artigos salvos
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
