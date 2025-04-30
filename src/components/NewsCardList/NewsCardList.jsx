import { useContext } from 'react';

import NewsCard from '../NewsCard/NewsCard';

import { NewsContext } from '../../contexts/NewsContext';
import { LocationContext } from '../../contexts/LocationContext';

function NewsCardList() {
  const { newsData } = useContext(NewsContext);
  const { isSavedNewsPage } = useContext(LocationContext);

  return (
    <section className='news-card-list'>
      <div className='news-card-list__content'>
        {!isSavedNewsPage && (
          <h2 className='news-card-list__title'>Procurar resultados</h2>
        )}
        <div className='news-card-list__news'>
          <ul className='news-card-list__cards-area'>
            {newsData.map((news, i) => (
              <NewsCard key={i} news={news}></NewsCard>
            ))}
          </ul>
          {!isSavedNewsPage && (
            <button className='news-card-list__button'>Mostrar mais</button>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsCardList;
