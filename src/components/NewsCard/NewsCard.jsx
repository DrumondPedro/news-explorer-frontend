import { useEffect, useState } from 'react';

import SaveButton from './components/SaveButton/SaveButton';

function NewsCard({ news }) {
  const [currentNews, setCurrentNews] = useState(news);

  useEffect(() => {
    setCurrentNews(news);
  }, [news]);

  return (
    <li className='news-card'>
      <SaveButton />
      <img className='news-card__image' src={currentNews.image} alt='' />
      <div className='news-card__content'>
        <p className='news-card__date'>{currentNews.date}</p>
        <h3 className='news-card__title'>{currentNews.title}</h3>
        <p className='news-card__text'>{currentNews.text}</p>
        <p className='news-card__font'>{currentNews.font}</p>
      </div>
    </li>
  );
}

export default NewsCard;
