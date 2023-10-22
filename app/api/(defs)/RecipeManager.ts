import { Recipe } from './Recipe'

type editProps = {
    name: string,
    ingredients: string[],
    prepSteps: string,
}

export class RecipeManager {

    getRecipeList: () => Recipe[]
    addRecipe: (recipeName: string, recipeIngredients: string[], recipePrepSteps: string) => Recipe
    removeRecipe: (recipeId: string) => void
    editRecipe: (recipeId: string, propsToEdit: editProps) => Recipe

    constructor(recipes = []) {
        let _recipes = recipes
        let counter = 1
        this.getRecipeList = () => _recipes.slice()
        this.addRecipe = (recipeName, recipeIngredients, recipePrepSteps) => {
            const recipe = new Recipe('R_' + counter++, recipeName, recipeIngredients, recipePrepSteps)
            _recipes.push(recipe)
            return recipe
        }
        this.removeRecipe = (recipeId) => _recipes = _recipes.filter((recipe) => recipe.getId() !== recipeId)
        this.editRecipe = (recipeId, propsToEdit) => {
            const recipe = _recipes.find((recipe) => recipe.getId() === recipeId)
            recipe.setName(propsToEdit.name)
            if (propsToEdit.ingredients) {
                recipe.getIngredients().length = 0
                for (const ingredient of propsToEdit.ingredients) {
                    recipe.getIngredients().push(ingredient)
                }
            }
            if (propsToEdit.prepSteps) {
                recipe.getPrepSteps().length = 0
                for (const step of propsToEdit.prepSteps) {
                    recipe.getPrepSteps().push(step)
                }
            }
            return recipe
        }
    }

    getRecipesByIngredients(ingredients: string[]) {
        return this.getRecipeList().filter((recipe) => ingredients.every((ingredient) => recipe.getIngredients().includes(ingredient)))
    }
}