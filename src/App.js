import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
