import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { ChooseLanguageContext } from './Context/ChooseLanguageContext';

function App() {
  return (
    <>
      <ChooseLanguageContext>
        <NavigationBar />
        <Main />
        <Footer />
      </ChooseLanguageContext>
    </>
  );
}

export default App;
