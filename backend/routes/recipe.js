const recipeModel = require("../models/recipe");

const recipePost = async (request, response) => {
  const recipe = new recipeModel(request.body);

  try {
    await recipe.save();
    response.send(recipe);
  } catch (error) {
    response.status(500).send(error);
  }
}

const recipeGet = async (request, response) => {
  const recipe = await recipeModel.find({});

  try {
    response.send(recipe);
  } catch (error) {
    response.status(500).send(error);
  }
}

module.exports = {
  recipePost: recipePost,
  recipeGet: recipeGet
};