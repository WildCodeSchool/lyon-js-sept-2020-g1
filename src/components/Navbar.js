import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="nav">
        <div className="menuToggle">
          <input type="checkbox" id="navChecked" />
          <span />
          <span />
          <span />
          <ul className="menu">
            <li>
              <Link to="/">Random Recipes</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/AboutUs">Team Development</Link>
            </li>
            <li>
              <Link to="/Favoris">Favoris</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
