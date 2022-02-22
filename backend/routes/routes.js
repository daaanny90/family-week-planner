const express = require("express");
const recipe = require('./recipe')
const ingredient = require('./ingredient')
const app = express();

/**
 * Recipe
 */
app.post("/add_recipe", recipe.recipePost);
app.get("/recipes", recipe.recipeGet);

/**
 * Ingredient
 */
app.post("/add_ingredient", ingredient.ingredientPost)
app.get("/ingredients", ingredient.ingredientGet)

module.exports = app;