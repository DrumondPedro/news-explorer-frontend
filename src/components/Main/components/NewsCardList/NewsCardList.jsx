import { useContext } from 'react';

import NewsCard from '../../../NewsCard/NewsCard';

import { NewsContext } from '../../../../contexts/NewsContext';

function NewsCardList() {
  const { newsData } = useContext(NewsContext);

  return (
    <section className='news-card-list'>
      <h2 className='news-card-list__title'>Procurar resultados</h2>
      <div className='news-card-list__content'>
        <ul className='news-card-list__cards-area'>
          {newsData.map((news, i) => (
            <NewsCard key={i} news={news}></NewsCard>
          ))}
        </ul>
        <button className='news-card-list__button'>Mostrar mais</button>
      </div>
    </section>
  );
}

export default NewsCardList;
