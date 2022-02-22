# Family Menu Planner 🍝

The idea is to build an app, that every week will choose a menu (lunch and dinner) and that gives to the user daily instructions on what to cook and how, other than a shopping list for the week.

## Auto weekly menu 🤖

The app will choose the meals based on the meal charachteristics, such as:
- time needed to cook (at lunch must be something fast, ant weekends we can take more time to cook)
- type of meal (vegetarian or not)
- sasional ingredients
- calories
- variety of nutrients (following the food pyramid principle)
- rating that the user gives to the recipe
- and more

All parameters have to be customizable from the user, to give full control of the menu.

## Auto shopping list 🛒

Every day the user will receive ad email with the instructions, and at the end of the week will receive a shopping list for the next week.

## Recipes 🧑‍🍳

The user can add his favourite recipes, but the app will be able to scrape some websites, choosing the recipes based on some customizable charachteristics (e.g. duration, calories, sasional ingredients, etc.)

## Under the hood ⚙️

The app is a NodeJS/Express app, based on a MongoDB database. The frontend is build with SvelteKit.

## Routes 🛣️

- [Recipe](#Recipe)
  - [GET](#Get-all-recipes)
  - [POST](#Add-a-new-recipe)
- [Ingredient](#Ingredient)
  - [GET](#Get-all-ingredients)
  - [POST](#Add-a-new-ingredient)

### Recipe

#### Get all recipes

```http
GET /recipes
```

#### Response

```javascript
[
    {
        "_id": "62148638bcf83d14b98c8255",
        "name": "Carbonara",
        "vegetarian": false,
        "__v": 0
    }
]
```

#### Add a new recipe

```http
POST /add_recipe
```

#### Body

```javascript
{
    "name": "Amatriciana",
    "vegetarian": false
}
```

### Ingredient

#### Get all ingredients

```http
GET /ingredients
```

#### Response

```javascript
[
    {
        "_id": "62148ed81bc233401df0f348",
        "name": "Uova",
        "__v": 0
    }
[]
```

#### Add a new ingredient

```http
POST /add_ingredient
```

#### Body

```javascript
{
    "name": "Uova"
}
```