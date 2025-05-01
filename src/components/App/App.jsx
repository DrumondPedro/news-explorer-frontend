import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <div className='page'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/saved-news' element={<SavedNews />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
