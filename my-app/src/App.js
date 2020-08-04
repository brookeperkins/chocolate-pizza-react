import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import PizzaImg from './pizzaImg';
import Recipe from './Recipe.js';
import Ingredients from './Ingredients.js';
import AuthorBio from './AuthorBio.js';
import HeaderIcons from './HeaderIcons.js';

// props are how parent components talk to child components -- we "pass" props from parents to children
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
          <HeaderIcons />
        </header>
        <main>
          <PizzaImg />
          <Recipe />
          <Ingredients />
          <AuthorBio />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );

  }
}

export default App;