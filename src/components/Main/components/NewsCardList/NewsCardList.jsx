import { useContext } from 'react';

import NewsCard from '../../../NewsCard/NewsCard';

import { NewsContext } from '../../../../contexts/NewsContext';

function NewsCardList() {
  const { newsData } = useContext(NewsContext);

  return (
    <section className='news-card-list'>
      <div className='news-card-list__content'>
        <h2 className='news-card-list__title'>Procurar resultados</h2>
        <div className='news-card-list__news'>
          <ul className='news-card-list__cards-area'>
            {newsData.map((news, i) => (
              <NewsCard key={i} news={news}></NewsCard>
            ))}
          </ul>
          <button className='news-card-list__button'>Mostrar mais</button>
        </div>
      </div>
    </section>
  );
}

export default NewsCardList;
