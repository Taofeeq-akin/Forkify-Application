import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helper.js';

export const state = {
  recipe: {},
};

export const laodRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    console.log(data);

    const { recipe } = data.data; // since we have recipe on both side we can just distruct the variable
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      image: recipe.image_url,
      cookingTime: recipe.cooking_time,
    };
    console.log(state.recipe);
  } catch (err) {
    // Temp error handling
    console.log(`${err} 😒😒😒`);
  }
};
