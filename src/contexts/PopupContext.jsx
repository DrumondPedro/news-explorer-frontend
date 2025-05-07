import { createContext, useState } from 'react';

import LoginForm from '../components/Main/components/PopupWithForm/components/Form/components/LoginForm/LoginForm';
import SignupForm from '../components/Main/components/PopupWithForm/components/Form/components/SignupForm/SignupForm';

export const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const registerPopup = {
    title: 'Inscrever-se',
    children: <SignupForm></SignupForm>,
  };

  const loginPopup = {
    title: 'Entrar',
    children: <LoginForm></LoginForm>,
  };

  const successfulPopup = {
    title: 'Cadastro concluído com sucesso!',
  };

  return (
    <PopupContext.Provider
      value={{
        popup,
        handleOpenPopup,
        handleClosePopup,
        registerPopup,
        loginPopup,
        successfulPopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}
