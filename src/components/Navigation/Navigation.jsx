import { useContext, useEffect, useState } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { LoginContext } from '../../contexts/LoginContext';

function Navigation() {
  const location = useLocation();

  const { isLoggedIn } = useContext(LoginContext);

  const [isSavedNewsPage, setIsSavedNewsPage] = useState(false);

  const customClassName = ({ isActive }) =>
    'navigation__link' +
    (isActive ? ' navigation__link--active' : '') +
    (isActive && isSavedNewsPage
      ? ' navigation__link--active--light-theme'
      : '') +
    (isSavedNewsPage ? ' navigation__link--light-theme' : '');

  useEffect(() => {
    setIsSavedNewsPage(location.pathname === '/saved-news');
  }, [location.pathname]);

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
