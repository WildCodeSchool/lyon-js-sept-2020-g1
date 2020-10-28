import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Favoris from './components/Favoris';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Favoris" component={Favoris} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
