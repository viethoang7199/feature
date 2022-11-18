import './App.css';
import Header from './layouts/Header/Header';
import MainContent from './layouts/MainContent/MainContent';
import Sidebar from './layouts/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-content'>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
