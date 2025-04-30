import { createContext, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

export const LocationContext = createContext();

export function LocationProvider({ children }) {
  const location = useLocation();

  const [isSavedNewsPage, setIsSavedNewsPage] = useState(false);

  useEffect(() => {
    setIsSavedNewsPage(location.pathname === '/saved-news');
  }, [location.pathname]);

  return (
    <LocationContext.Provider value={{ isSavedNewsPage }}>
      {children}
    </LocationContext.Provider>
  );
}
