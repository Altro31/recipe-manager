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

// Flan
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

// Torrejas
recipeManager.addRecipe(

    //Id: 3

    //name
    'Torrejas',

    //Ingredients
    [
        'Leche',
        'Huevo',
        'Azucar',
        'Canela',
        'Aceite',

    ],

    //Preparation Steps
    'Preparation Steps',
)
// Arepas
recipeManager.addRecipe(

    //Id: 4

    //name
    'Arepas',

    //Ingredients
    [
        'Leche',
        'Huevo',
        'Azucar',
        'Arina',
        'Agua',
        'Vainilla',
    ],

    //Preparation Steps
    'Preparation Steps',
)
// Panetela
recipeManager.addRecipe(

    //Id: 5

    //name
    'Panetela',

    //Ingredients
    [
        'Huevo',
        'Azucar',
        'Arina',
    ],

    //Preparation Steps
    'Preparation Steps',
)