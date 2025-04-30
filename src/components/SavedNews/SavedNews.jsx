import { useContext } from 'react';

import SavedNewsHeader from './SavedNewsHeader/SavedNewsHeader';
import Preloader from '../Preloader/Preloader';
import NewsNotFound from '../NewsNotFound/NewsNotFound';
import NewsCardList from '../NewsCardList/NewsCardList';

const newsData = 'newsData';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNews() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <section className='saved-news'>
      <SavedNewsHeader currentUser={currentUser} />
      {/* <Preloader /> */}
      {newsData ? (
        <NewsCardList newsData={newsData} />
      ) : (
        <NewsNotFound currentUser={currentUser} />
      )}
    </section>
  );
}

export default SavedNews;
