import { useContext, useEffect, useState } from 'react';

import NewsCard from '../NewsCard/NewsCard';

import { NewsContext } from '../../contexts/NewsContext';
import { LocationContext } from '../../contexts/LocationContext';

function NewsCardList() {
  const { newsData } = useContext(NewsContext);
  const { isSavedNewsPage } = useContext(LocationContext);

  const [renderedNews, setRenderedNews] = useState([]);
  const [maxItems, setMaxItems] = useState(3);

  function lidaComRenderizaçãoDoCartão() {
    const additionalItems = newsData.filter(
      (news) => newsData.indexOf(news) < maxItems
    );

    setRenderedNews(additionalItems);

    setMaxItems(maxItems + 3);
  }

  useEffect(() => {
    if (isSavedNewsPage) {
      setMaxItems(newsData.length);
    }

    lidaComRenderizaçãoDoCartão();
  }, []);

  return (
    <section className='news-card-list'>
      <div className='news-card-list__content'>
        {!isSavedNewsPage && (
          <h2 className='news-card-list__title'>Procurar resultados</h2>
        )}
        <div className='news-card-list__news'>
          <ul className='news-card-list__cards-area'>
            {renderedNews.map((news, i) => (
              <NewsCard key={i} news={news}></NewsCard>
            ))}
          </ul>
          {newsData.length > renderedNews.length && (
            <button
              className='news-card-list__button'
              onClick={lidaComRenderizaçãoDoCartão}
            >
              Mostrar mais
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsCardList;
