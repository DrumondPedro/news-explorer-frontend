function Form({ children, buttonText, linkText }) {
  return (
    <form className={`form`} noValidate>
      {/* {children} */}
      <fieldset className='form__set'>
        <label className='form__field'>
          E-mail
          <input
            className={`form__input`}
            type='email'
            placeholder='Insira e-mail'
            required
          />
          <span className={`form__error form__error--visible`}>
            Invalid email address
          </span>
        </label>
        <label className='form__field'>
          Senha
          <input
            className={`form__input`}
            type='password'
            placeholder='Insira a senha'
            required
          />
          <span className={`form__error form__error--visible`}>
            Invalid email address
          </span>
        </label>
      </fieldset>
      <button type='submit' className={`form__submit-button `}>
        {`${buttonText}`}
      </button>
      <p className='form__text'>
        ou <a className='form__text--link'>{`${linkText}`}</a>
      </p>
    </form>
  );
}

export default Form;
