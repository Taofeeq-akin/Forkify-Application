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
const showRecipe = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );
    const data = await res.json(); // to get data from fetch api and store it to the variable

    console.log(res, data);

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    let { recipe } = data.data; // since we have recipe on both side we can just distruct the variable
    
  } catch (err) {
    alert(err);
  }
};
showRecipe();
