import { useState } from 'react';

import Search from './components/Search/Search';
import Preloader from '../Preloader/Preloader';
import NewsNotFound from '../NewsNotFound/NewsNotFound';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from './components/About/About';
import PopupWithForm from './components/PopupWithForm/PopupWithForm';
import Form from './components/PopupWithForm/components/Form/Form';
import LoginForm from './components/PopupWithForm/components/Form/components/LoginForm/LoginForm';

const newsData = 'newsData';

function Main({ popup, handleClosePopup }) {
  return (
    <main className='content'>
      <Search />
      {/* <Preloader /> */}
      {newsData ? <NewsCardList newsData={newsData} /> : <NewsNotFound />}
      <About />
      {popup && (
        <PopupWithForm
          title={`${popup.title}`}
          handleClosePopup={handleClosePopup}
        >
          {popup.children}
        </PopupWithForm>
      )}
    </main>
  );
}

export default Main;
