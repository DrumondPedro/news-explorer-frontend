import { useContext } from 'react';

import { NewsContext } from '../../contexts/NewsContext';

import notFoundIcon from '../../assets/images/NewsNotFound/not_found.svg';

function NewsNotFound({ currentUser }) {
  const { isNewsError } = useContext(NewsContext);
  return (
    <section className='news-not-found'>
      <img
        className='news-not-found__image'
        src={notFoundIcon}
        alt='Icone de uma lupa com um rosto triste'
      />
      <h2 className='news-not-found__title'>
        {isNewsError ? 'Desculpe' : 'Nada encontrado'}
      </h2>
      <p className='news-not-found__text'>
        {isNewsError
          ? 'Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.'
          : currentUser
          ? 'Desculpe, mas você ainda não tem artigos salvos.'
          : 'Desculpe, mas nada corresponde aos seus termos de pesquisa.'}
      </p>
    </section>
  );
}

export default NewsNotFound;
