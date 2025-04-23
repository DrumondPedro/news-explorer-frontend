import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <div className='page'>
        <Footer />
      </div>
    </>
  );
}

export default App;
