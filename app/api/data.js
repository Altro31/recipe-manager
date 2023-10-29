import { RecipeManager } from './(defs)/RecipeManager'


export const recipeManager = RecipeManager.getInstance()

// Arroz con Leche
recipeManager.addRecipe(

    //Id: 1

    //name
    'Arroz con Leche',

    //Ingredients
    [
        'Arroz',
        'Leche',
        'Canela',
        'Azucar',
    ],

    //Preparation Steps
    'Preparation Steps',
)

// Arroz con Leche
recipeManager.addRecipe(

    //Id: 2

    //name
    'Flan',

    //Ingredients
    [
        'Leche',
        'Huevo',
        'Azucar',
    ],

    //Preparation Steps
    'Preparation Steps',
)