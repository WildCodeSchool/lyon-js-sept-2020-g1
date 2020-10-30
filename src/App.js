/* eslint-disable import/newline-after-import */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Favoris from './Components/Favoris';
import './Components/Contact.css';

function App() {
  return (
    <div className="App">
      <Router>
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

        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Favoris" component={Favoris} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
