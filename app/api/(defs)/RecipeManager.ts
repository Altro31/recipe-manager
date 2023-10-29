import { Recipe } from './Recipe'

type editProps = {
    name: string,
    ingredients: string[],
    prepSteps: string,
    imageUrl: string,
}


export class RecipeManager {

    private recipes: Recipe[]
    private counter: number
    private static instance: RecipeManager

    private constructor() {
        this.recipes = []
        this.counter = 1
    }

    
    static getInstance() {
        if (!this.instance)
            this.instance = new this()

        return this.instance
    }

    getRecipeList() {
        return this.recipes
    }

    addRecipe(name: string, ingredients: string[], prepSteps: string, imageUrl: string) {
        const recipe = new Recipe('R_' + this.counter++, name, ingredients, prepSteps, imageUrl)
        this.recipes.push(recipe)
        return recipe
    }

    removeRecipe(recipeId: string) {
        this.recipes = this.recipes.filter((recipe) => recipe.getId() !== recipeId)
    }

    editRecipe(recipeId: string, propsToEdit: editProps) {
        const recipe = this.recipes.find((recipe) => recipe.getId() === recipeId)
        recipe.setName(propsToEdit.name)
        if (propsToEdit.ingredients) {
            recipe.getIngredients().length = 0
            for (const ingredient of propsToEdit.ingredients) {
                recipe.getIngredients().push(ingredient)
            }
        }
        recipe.setPrepSteps(propsToEdit.prepSteps)
        recipe.setImageUrl(propsToEdit.imageUrl)

        return recipe
    }

    getRecipesByIngredients(ingredients: string[]) {
        return this.recipes.filter((recipe) => ingredients.every((ingredient) => recipe.getIngredients().includes(ingredient)))
    }
}