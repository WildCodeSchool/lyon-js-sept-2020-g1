import React from 'react';
import NavbarIngredients from './NavbarIngredients';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavbarIngredients />
        <h1>Random Recipes</h1>
      </div>
    );
  }
}

export default Home;
