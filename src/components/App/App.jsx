import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';

import Footer from '../Footer/Footer';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <div className='page'>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route
            path='/saved-news'
            element={
              <div
                style={{
                  width: '100%',
                  backgroundColor: '#02370080',
                  height: '500px',
                }}
              ></div>
            }
          ></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
