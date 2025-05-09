import { useContext, useState } from 'react';

import Search from './components/Search/Search';
import Preloader from '../Preloader/Preloader';
import NewsNotFound from '../NewsNotFound/NewsNotFound';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from './components/About/About';
import PopupWithForm from './components/PopupWithForm/PopupWithForm';
import SuccessfulPopup from './components/SuccessfulPopup/SuccessfulPopup';

import { PopupContext } from '../../contexts/PopupContext';
import { NewsContext } from '../../contexts/NewsContext';

function Main() {
  const { popup } = useContext(PopupContext);
  const { newsData, isSent, isWaitingReply } = useContext(NewsContext);

  return (
    <main className='content'>
      <Search />
      {isSent &&
        (isWaitingReply ? (
          <Preloader />
        ) : newsData.length ? (
          <NewsCardList newsData={newsData} />
        ) : (
          <NewsNotFound />
        ))}
      <About />
      {popup &&
        (popup.children ? (
          <PopupWithForm title={`${popup.title}`}>
            {popup.children}
          </PopupWithForm>
        ) : (
          <SuccessfulPopup title={`${popup.title}`} />
        ))}
    </main>
  );
}

export default Main;
