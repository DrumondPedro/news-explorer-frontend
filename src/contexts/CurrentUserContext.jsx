import { createContext, useState } from 'react';

export const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    name: 'Pedro',
    email: '...',
    news: [],
    _id: '000',
  });

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
