const Recipe = require("../models/Recipe");

const recipeData = [
    {
        name: "Grilled Salmon ",
        ingredients: "1.5 pounds salmon fillets,lemon pepper to taste,garlic powder to taste,salt to taste,1/3 cup soy sauce,1/3 cup soy sauce,1/3 cup brown sugar,1/3 cup water,1/4 cup vegetable oil",
        instructions: "season salmon fillets with lemon pepper, garlic powder, and salt,In a small bowl. stir together soy sauce, brown sugar, water, and vegetable oil until sugar is dissolved. Place fish in a large resealable plastic bag with the soy sauce mixture, seal, and turn to coat. Refrigerate for at least 2 hours.,Preheat grill for medium heat,Lightly oil grill grate. Place salmon on the preheated grill, and discard marinade. Cook salmon for 6 to 8 minutes per side, or until the fish flakes easily with a fork."
         
    },
    {
        name:"Peanut Butter Pie",
        ingredients:"1.25 cups chocolate cookie crumbs, 1/4 cup white sugar, 1/4 cup butter, 1 (8 ounce) package cream cheese, softened, 1 cup creamy peanut butter,1 cup white sugar,1 tablespoon vanilla extract,1 cup heavy whipping cream",
        instructions:"Preheat oven to 375 degrees F (190 degrees C).,Combine 1 1/4 cup cookie crumbs, 1/4 cup sugar, and 1/4 cup butter; press into a 9-inch pie plate. Bake in preheated oven for 10 minutes. Cool on wire rack.,In a mixing bowl, beat cream cheese, peanut butter, 1 cup sugar, 1 tablespoon butter, and vanilla until smooth. Whip the cream, and fold into the peanut butter mixture.,Gently spoon filing into crust. Garnish pie with chocolate or cookie crumbs if desired. Refrigerate for several hours before serving."
    }
]

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;