import { createContext } from 'react';

export const LigthThemeContext = createContext();

function addLigthTheme() {
  document.querySelector('html').classList.add('Light-theme');
}

function removeLigthTheme() {
  document.querySelector('html').classList.remove('Light-theme');
}

export function LigthThemeProvider({ children }) {
  return (
    <LigthThemeContext.Provider value={{ addLigthTheme, removeLigthTheme }}>
      {children}
    </LigthThemeContext.Provider>
  );
}
