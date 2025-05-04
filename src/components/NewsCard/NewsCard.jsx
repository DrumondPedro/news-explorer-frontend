import { useEffect, useState } from 'react';

import savedIconInactive from '../../assets/images/NewsCard/saved_icon.svg';
import savedIconActive from '../../assets/images/NewsCard/saved_icon_active.svg';
import savedIconHover from '../../assets/images/NewsCard/saved_icon_hover.svg';

function NewsCard({ news }) {
  const [currentNews, setCurrentNews] = useState(news);
  const [saveImage, setSaveImage] = useState(savedIconInactive);
  const [isSaved, setIsSaved] = useState(false);

  const hendlerClickImage = () => {
    if (isSaved === false) {
      setIsSaved(true);
      setSaveImage(savedIconActive);
      return;
    }
    setIsSaved(false);
    setSaveImage(savedIconHover);
  };

  const handleHoverImage = () => {
    if (saveImage === savedIconInactive) {
      setSaveImage(savedIconHover);
      return;
    }
    if (saveImage === savedIconHover) {
      setSaveImage(savedIconInactive);
    }
  };

  useEffect(() => {
    setCurrentNews(news);
  }, [news]);

  return (
    <li className='news-card'>
      <button
        className={`news-card__save-button`}
        onClick={hendlerClickImage}
        onMouseEnter={handleHoverImage}
        onMouseLeave={handleHoverImage}
      >
        <img
          className={`news-card__save-button-image`}
          src={saveImage}
          alt='Imagem de uma badeira minimalista'
        />
      </button>
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
