import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Favoris from './components/Favoris';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Favoris" component={Favoris} />
        </Switch>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/AboutUs">About us</Link>
          </li>
          <li>
            <Link to="/Favoris">Favoris</Link>
          </li>
        </ul>
      </Router>
    </div>
  );
}

export default App;
