import * as model from './module.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; // install for pollying all
import 'regenerator-runtime/runtime'; //regenerator-runtime for polifying async await

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading Recipe
    await model.laodRecipe(id); // will return a peomise since its an async function
    const { recipe } = model.state; // since recipe is now in state object

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
); // loop over instaed of listening to events multiple times

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe); // to make the window load if just open
