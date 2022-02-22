const ingredientModel = require('../models/ingredient')

const ingredientGet = async (request, response) => {
  const ingredient = await ingredientModel.find({});

  try {
    response.send(ingredient);
  } catch (error) {
    response.status(500).send(error);
  }
}

const ingredientPost = async (request, response) => {
  const ingredient = new ingredientModel(request.body);

  try {
    await ingredient.save();
    response.send(ingredient);
  } catch (error) {
    response.status(500).send(error);
  }
}

module.exports = {
  ingredientGet: ingredientGet,
  ingredientPost: ingredientPost
}