import { createContext, useState } from 'react';

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
}
