import SearchForm from './components/SearchForm/SearchForm';

function Search() {
  return (
    <section className='search'>
      <div className='search__content'>
        <h1 className='search__title'>O que está acontecendo no mundo?</h1>
        <p className='search__text'>
          Encontre as últimas notícias sobre qualquer tema e salve elas em sua
          conta pessoal
        </p>
        <SearchForm />
      </div>
    </section>
  );
}

export default Search;
