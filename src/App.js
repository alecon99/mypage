import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
