import { useContext, useRef, useState } from 'react';

import { PopupContext } from '../../../../../../../../contexts/PopupContext';

function LoginForm() {
  const { handleOpenPopup } = useContext(PopupContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const [signinData, setSigninData] = useState({ email: '', password: '' });

  const [isValid, setIsValid] = useState({
    validEmail: ' ',
    validPassword: ' ',
  });
  const [errorMessage, setErrorMessage] = useState({
    emailMsg: '',
    passwordMsg: '',
  });
  const [isActive, setIsActive] = useState(false);

  const handleEmailChange = (evt) => {
    setSigninData({ ...signinData, email: evt.target.value });
    setIsValid({
      ...isValid,
      validEmail: emailRef.current.validity.valid,
    });
    setErrorMessage({
      ...errorMessage,
      emailMsg: emailRef.current.validationMessage,
    });
    setIsActive(
      emailRef.current.validity.valid && passwordRef.current.validity.valid
    );
  };

  const handlePasswordChange = (evt) => {
    setSigninData({ ...signinData, password: evt.target.value });
    setIsValid({
      ...isValid,
      validPassword: passwordRef.current.validity.valid,
    });
    setErrorMessage({
      ...errorMessage,
      passwordMsg: passwordRef.current.validationMessage,
    });
    setIsActive(
      emailRef.current.validity.valid && passwordRef.current.validity.valid
    );
  };

  async function handleSubimit(evt) {
    evt.preventDefault();
    console.log('login');
  }

  function openRegisterPopup() {
    handleOpenPopup(registerPopup);
  }

  const registerPopup = {
    title: 'Inscrever-se',
    children: (
      // <Form buttonText={'Entrar'} linkText={'Inscreva-se'}></Form>
      <p>teste</p>
    ),
  };

  return (
    <form className={`form`} onSubmit={handleSubimit} noValidate>
      <fieldset className='form__set'>
        <label className='form__field'>
          E-mail
          <input
            className='form__input'
            type='email'
            placeholder='Insira e-mail'
            value={signinData.email}
            onChange={handleEmailChange}
            ref={emailRef}
            required
          />
          <span
            className={`form__error ${
              isValid.validEmail ? `` : `form__error--visible`
            }`}
          >
            {errorMessage.emailMsg}
          </span>
        </label>
        <label className='form__field'>
          Senha
          <input
            className='form__input'
            type='password'
            minLength='8'
            placeholder='Insira a senha'
            value={signinData.password}
            onChange={handlePasswordChange}
            ref={passwordRef}
            required
          />
          <span
            className={`form__error ${
              isValid.validPassword ? `` : `form__error--visible`
            }`}
          >
            {errorMessage.passwordMsg}
          </span>
        </label>
      </fieldset>
      <button
        type='submit'
        disabled={!isActive}
        className={`form__submit-button ${
          isActive ? `` : `form__submit-button--inactive`
        }`}
      >
        {`Entrar`}
      </button>
      <p className='form__text'>
        ou{' '}
        <a
          onClick={openRegisterPopup}
          className='form__text--link'
        >{`Inscreva-se`}</a>
      </p>
    </form>
  );
}

export default LoginForm;
