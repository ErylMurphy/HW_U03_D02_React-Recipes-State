import React, { Component } from 'react';
import './style.css';

import recipes from '../data/recipes';
import Header from '../Header';
import Article from '../Article';

const recipe = recipes[0];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: recipes[0],
      recipeIndex: 0,
      currentRecipeId: '',
    }
    this.recipePrev = this.recipePrev.bind(this);
    this.recipeNext = this.recipeNext.bind(this);
  }
  recipePrev(recipeId) {
    console.log('click');
    this.setState({
      recipe: recipes[0],
      recipeIndex: 0,
      currentRecipeId: recipeId,
    });
  }
  recipeNext(recipeId) {
    console.log('click');
    this.setState({
      currentRecipeId: recipeId,
      recipeId: recipeId + 1,
    });  
  }

  render() {
    return (
      <div className="flex-container">
        <nav className="nav">
          <button className={`previous-recipe ${this.props.recipeId === this.props.currentRecipeId ? 'selected' : ''}`}
            onClick={() => { this.props.recipePrev(this.props.recipeId) }}>Previous Recipe</button>
          <button className= "next-recipe"
            onClick={() => { this.props.recipeNext(this.props.recipeId) }}>Next Recipe</button>
        </nav>

        <Header
          key={recipe.id}
          recipeId={recipe.id}
          currentRecipeId={this.state.currentRecipeId}
          recipeNext ={this.recipeNext}
          recipePrev = {this.recipePrev}
          title={recipe.title}
          byline={recipe.byline}
          activePrep={recipe.activePrep}
          totalPrep={recipe.totalPrep}
          servings={recipe.servings}
        />

        <Article
          foodImg={recipe.img}
          ingredients={recipe.ingredients}
          preparation={recipe.preparation}
        />

        <footer>Copyright &copy; General Assembly</footer>
      </div>
    );
  }
}
console.log(Object.getPrototypeOf(App));
export default App;
