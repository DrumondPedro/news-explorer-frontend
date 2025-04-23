import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <div className='page'></div>
    </>
  );
}

export default App;
