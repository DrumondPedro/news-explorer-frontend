import Search from './components/Search/Search';
import Preloader from './components/Preloader/Preloader';
import NewsCardList from './components/NewsCardList/NewsCardList';
import About from './components/About/About';

function Main() {
  return (
    <main className='content'>
      <Search />
      {/* <Preloader /> */}
      <NewsCardList />
      <About />
    </main>
  );
}

export default Main;
