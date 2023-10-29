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

    //Image URL
    ''
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

    //Image URL
    ''
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

    //Image URL
    ''
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

    //Image URL
    ''
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

    //Image URL
    ''
)