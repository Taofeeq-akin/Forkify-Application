import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};

export const laodRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json(); // to get data from fetch api and store it to the variable
    // console.log(res, data);

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

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
    alert(err);
  }
};
