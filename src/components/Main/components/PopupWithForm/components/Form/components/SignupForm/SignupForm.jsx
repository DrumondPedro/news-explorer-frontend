import { useContext, useRef, useState } from 'react';

import LoginForm from '../LoginForm/LoginForm';

import { PopupContext } from '../../../../../../../../contexts/PopupContext';

function SignupForm() {
  const { handleOpenPopup } = useContext(PopupContext);

  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();

  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const [isValid, setIsValid] = useState({
    validEmail: ' ',
    validPassword: ' ',
    validUserName: ' ',
  });
  const [errorMessage, setErrorMessage] = useState({
    emailMsg: '',
    passwordMsg: '',
    userNameMsg: '',
  });
  const [isActive, setIsActive] = useState(false);

  const handleEmailChange = (evt) => {
    setRegisterData({ ...registerData, email: evt.target.value });
    setIsValid({
      ...isValid,
      validEmail: emailRef.current.validity.valid,
    });
    setErrorMessage({
      ...errorMessage,
      emailMsg: emailRef.current.validationMessage,
    });
    setIsActive(
      emailRef.current.validity.valid &&
        passwordRef.current.validity.valid &&
        userNameRef.current.validity.valid
    );
  };

  const handlePasswordChange = (evt) => {
    setRegisterData({ ...registerData, password: evt.target.value });
    setIsValid({
      ...isValid,
      validPassword: passwordRef.current.validity.valid,
    });
    setErrorMessage({
      ...errorMessage,
      passwordMsg: passwordRef.current.validationMessage,
    });
    setIsActive(
      emailRef.current.validity.valid &&
        passwordRef.current.validity.valid &&
        userNameRef.current.validity.valid
    );
  };

  const handleUserNameChange = (evt) => {
    setRegisterData({ ...registerData, userName: evt.target.value });
    setIsValid({
      ...isValid,
      validUserName: userNameRef.current.validity.valid,
    });
    setErrorMessage({
      ...errorMessage,
      passwordMsg: userNameRef.current.validationMessage,
    });
    setIsActive(
      emailRef.current.validity.valid &&
        passwordRef.current.validity.valid &&
        userNameRef.current.validity.valid
    );
  };

  async function handleSubimit(evt) {
    evt.preventDefault();
    console.log('registro');
  }

  function openLoginPopup() {
    handleOpenPopup(loginPopup);
  }

  const loginPopup = {
    title: 'Entrar',
    children: (
      // <Form buttonText={'Entrar'} linkText={'Inscreva-se'}></Form>
      <LoginForm></LoginForm>
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
            value={registerData.email}
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
            value={registerData.password}
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
        <label className='form__field'>
          Nome de usuário
          <input
            className='form__input'
            type='text'
            minLength='2'
            placeholder='Insira seu nome de usuário'
            value={registerData.userName}
            onChange={handleUserNameChange}
            ref={userNameRef}
            required
          />
          <span
            className={`form__error ${
              isValid.validUserName ? `` : `form__error--visible`
            }`}
          >
            {errorMessage.userNameMsg}
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
        {`Inscrever-se`}
      </button>
      <p className='form__text'>
        ou{' '}
        <a onClick={openLoginPopup} className='form__text--link'>{`Entre`}</a>
      </p>
    </form>
  );
}

export default SignupForm;
