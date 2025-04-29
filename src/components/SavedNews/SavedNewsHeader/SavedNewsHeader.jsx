import { useContext } from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function SavedNewsHeader() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className='saved-news-header'>
      <p className='saved-news-header__caption'>Artigos salvos</p>
      <h1 className='saved-news-header__title'>
        {`${currentUser.name}, você tem ${currentUser.news.length} artigos salvos`}
      </h1>
      <p className='saved-news-header__keywords'>
        {`Por palavras-chave: Natureza, Yellowstone, e 2 outras`}
      </p>
    </section>
  );
}

export default SavedNewsHeader;
