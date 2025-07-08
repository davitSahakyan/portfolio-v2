import InfoBar from './components/infoBar/infoBar';
import MainContent from './components/mainContent/mainContent';
// import MenuBar from '../../components/menuBar/menuBar';
import './Main.css';

function App() {
  return (
    <div className="dav-app">
      <div className="app-wrapper">
        <div className='app-container'>
            <InfoBar></InfoBar>
            <MainContent></MainContent>
            {/* <MenuBar></MenuBar> */}
        </div>
      </div>
    </div>
  );
}

export default App;