import './App.css';
import Header from './layouts/Header/Header';
import MainContent from './layouts/MainContent/MainContent';

function App({ amount }) {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
