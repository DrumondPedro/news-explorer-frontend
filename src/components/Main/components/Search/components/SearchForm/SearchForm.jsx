import { useContext, useRef, useState } from 'react';
import { NewsContext } from '../../../../../../contexts/NewsContext';

function SearchForm() {
  const { handleNewsResearch } = useContext(NewsContext);

  const keywordRef = useRef();

  const [keyword, setKeyword] = useState('');
  const [isValid, setIsValid] = useState(true);

  function handleKeywordChange(evt) {
    setKeyword(evt.target.value);
    setIsValid(keywordRef.current.validity.valid);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!keywordRef.current.validity.valid) {
      setIsValid(false);
      return;
    }
    handleNewsResearch(keyword);
    setKeyword('');
  }

  return (
    <form className='search-form' noValidate onSubmit={handleSubmit}>
      <fieldset className='search-form__set'>
        <label className='search-form__field' htmlFor=''>
          <input
            className='search-form__input'
            type='text'
            placeholder='Inserir tema'
            required
            value={keyword}
            ref={keywordRef}
            onChange={handleKeywordChange}
          />
          <span
            className={`search-form__error ${
              isValid ? '' : `search-form__error--visible`
            }`}
          >
            Por favor, insira uma palavra-chave
          </span>
        </label>
      </fieldset>
      <button className='search-form__button' type='submit'>
        Procurar
      </button>
    </form>
  );
}

export default SearchForm;
