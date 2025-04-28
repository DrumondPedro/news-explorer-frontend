function SearchForm() {
  return (
    <form className='search-form' noValidate>
      <fieldset className='search-form__set'>
        <label className='search-form__field' htmlFor=''>
          <input
            className='search-form__input'
            type='text'
            placeholder='Inserir tema'
            required
            minLength='2'
          />
        </label>
      </fieldset>
      <button className='search-form__button' type='submit'>
        Procurar
      </button>
    </form>
  );
}

export default SearchForm;
