import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';

import { CurrentUserProvider } from './contexts/CurrentUserContext';
import { NewsProvider } from './contexts/NewsContext';
import { LoginProvider } from './contexts/LoginContext';
import { LocationProvider } from './contexts/LocationContext';
import { LigthThemeProvider } from './contexts/LigthThemeContext';
import { PopupProvider } from './contexts/PopupContext';

import './index.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <CurrentUserProvider>
      <NewsProvider>
        <LoginProvider>
          <LocationProvider>
            <LigthThemeProvider>
              <PopupProvider>
                <App />
              </PopupProvider>
            </LigthThemeProvider>
          </LocationProvider>
        </LoginProvider>
      </NewsProvider>
    </CurrentUserProvider>
  </BrowserRouter>
  // </StrictMode>
);
