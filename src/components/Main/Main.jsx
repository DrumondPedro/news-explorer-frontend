import Search from './components/Search/Search';
import NewsCardList from './components/NewsCardList/NewsCardList';
import About from './components/About/About';

function Main() {
  return (
    <main className='content'>
      <Search />
      <NewsCardList />
      <About />
    </main>
  );
}

export default Main;
