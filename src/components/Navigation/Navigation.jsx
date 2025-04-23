import { useEffect, useState } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

function Navigation() {
  const [isLoged, setIsLogued] = useState(true);
  const [isSavedNewsPage, setIsSavedNewsPage] = useState(false);

  const location = useLocation();

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
      {isLoged && (
        <NavLink to='/saved-news' className={customClassName}>
          Artigos salvos
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
