import notFoundIcon from '../../../../assets/images/NewsNotFound/not_found.svg';

function NewsNotFound() {
  return (
    <section className='news-not-found'>
      <img
        className='news-not-found__image'
        src={notFoundIcon}
        alt='Icone de uma luneta com um rosto triste'
      />
      <h2 className='news-not-found__title'>Nada encontrado</h2>
      <p className='news-not-found__text'>
        Desculpe, mas nada corresponde aos seus termos de pesquisa.
      </p>
    </section>
  );
}

export default NewsNotFound;
