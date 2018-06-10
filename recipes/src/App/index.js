import React, { Component } from 'react';
import './style.css';

import recipes from '../data/recipes';
import Header from '../Header';
import Article from '../Article';

const recipe = recipes;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: recipes[0],
      recipeIndex: 0,
    }
    this.recipePrev = this.recipePrev.bind(this)
    this.recipeNext = this.recipeNext.bind(this)
  }

  recipePrev() {
    this.setState({
      recipe: recipes[this.state.recipeIndex - 1],
      recipeIndex: [this.state.recipeIndex - 1],
    })
  }
  recipeNext() {
    this.setState({
      recipe: recipes[this.state.recipeIndex + 1],
      recipeIndex: this.state.recipeIndex + 1,
    })
  }

  render() {
    return (
      <div className="flex-container">
        <nav className="nav">
          <button className= "previous-recipe" onClick={() => { this.recipePrev() }}>Previous Recipe</button>
          <button className= "next-recipe"
            onClick={() => { this.recipeNext() }}>Next Recipe</button>
        </nav>

        <Header
          title={this.state.recipe.title}
          byline={this.state.recipe.byline}
          activePrep={this.state.recipe.activePrep}
          totalPrep={this.state.recipe.totalPrep}
          servings={this.state.recipe.servings}
        />

        <Article
          foodImg={this.state.recipe.img}
          ingredients={this.state.recipe.ingredients}
          preparation={this.state.recipe.preparation}
        />

        <footer>Copyright &copy; General Assembly</footer>
      </div>
    );
  }
}
console.log(Object.getPrototypeOf(App));
export default App;
