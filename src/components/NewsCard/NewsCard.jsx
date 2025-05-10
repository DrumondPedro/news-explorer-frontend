import { useContext, useEffect, useState } from 'react';

import { LocationContext } from '../../contexts/LocationContext';

import SaveButton from './components/SaveButton/SaveButton';

function NewsCard({ news }) {
  const { isSavedNewsPage } = useContext(LocationContext);

  const [currentNews, setCurrentNews] = useState(news);
  const [newDate, setNewDate] = useState('');
  const [isHover, setIsHover] = useState(false);

  const handleHoverCard = () => {
    if (isHover === false) {
      setIsHover(true);
      return;
    }
    setIsHover(false);
  };

  function handlesDateFormatting() {
    setNewDate(
      new Date(currentNews.publishedAt).toLocaleDateString('pt-PT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    );
  }

  useEffect(() => {
    setCurrentNews(news);
    handlesDateFormatting();
  }, [news]);

  return (
    <li
      className='news-card'
      onMouseEnter={handleHoverCard}
      onMouseLeave={handleHoverCard}
    >
      {isSavedNewsPage && !isHover && (
        <div className='news-card__topic-popup'>
          <p className='news-card__topic-popup-text'>{currentNews.source.id}</p>
        </div>
      )}
      <SaveButton />
      <img className='news-card__image' src={currentNews.urlToImage} alt='' />
      <div className='news-card__content'>
        <p className='news-card__date'>{newDate}</p>
        <h3 className='news-card__title'>{currentNews.title}</h3>
        <p className='news-card__text'>{currentNews.description}</p>
        <p className='news-card__font'>{currentNews.source.name}</p>
      </div>
    </li>
  );
}

export default NewsCard;
