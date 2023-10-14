import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar/NavigationBar';
import SliderSection from './components/Slider/SliderSection';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <NavigationBar/>
      <Main/>
    </>
  );
}

export default App;
