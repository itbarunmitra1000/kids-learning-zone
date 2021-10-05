
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Service from './Components/Service/Service';
import Home from './Components/Home/Home';
import AboutUs from './Components/About Us/AboutUs';
import ContactUs from './Components/Contact Us/ContactUs';
import { NotFound } from 'http-errors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Service></Service>
          </Route>
          <Route path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/contact'>
            <ContactUs></ContactUs>
          </Route>

        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
