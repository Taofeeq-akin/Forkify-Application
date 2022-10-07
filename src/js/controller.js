import * as model from './module.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; // install for pollying all
import 'regenerator-runtime/runtime'; //regenerator-runtime for polifying async await

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading Recipe
    await model.laodRecipe(id); // will return a peomise since its an async function so we have to await it

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    await model.loadSearchResults('pizza');
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};
controlSearchResults();

// This wil be our Subcriber to call controlRecipes function from view js file
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
