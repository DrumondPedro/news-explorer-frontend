import Search from './components/Search/Search';
import Preloader from './components/Preloader/Preloader';
import NewsNotFound from './components/NewsNotFound/NewsNotFound';
import NewsCardList from './components/NewsCardList/NewsCardList';
import About from './components/About/About';

function Main() {
  return (
    <main className='content'>
      <Search />
      {/* <Preloader /> */}
      {/* <NewsNotFound /> */}
      <NewsCardList />
      <About />
    </main>
  );
}

export default Main;
