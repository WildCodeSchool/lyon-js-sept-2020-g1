/* eslint-disable import/newline-after-import */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SearchContextProvider } from './contexts/SearchContext';
import Home from './Components/Home';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Favorites from './Components/Favorites';
import './Components/Contact.css';
import Navbar from './Components/Navbar';
import Recipe from './Components/Recipe';
import Footer from './Components/Footer';
import { FavoritesContextProvider } from './contexts/FavoritesContext';

function App() {
  return (
    <div className="App">
      <Router>
        <SearchContextProvider>
          <FavoritesContextProvider>
            <header>
              <Navbar />
            </header>
            <main>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Contact" component={Contact} />
                <Route path="/AboutUs" component={AboutUs} />
                <Route path="/Favoris" component={Favorites} />
                <Route exact path="/recipe/:id" component={Recipe} />
              </Switch>
            </main>
          </FavoritesContextProvider>
        </SearchContextProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
