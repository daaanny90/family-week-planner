const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  vegetarian: {
    type: Boolean,
    default: false,
  },
});
const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;