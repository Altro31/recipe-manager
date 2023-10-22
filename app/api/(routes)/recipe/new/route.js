import { recipeManager } from "@/app/api/data"

export function POST(request){
    
    
    const recipe = recipeManager.addRecipe(
        
    )

    return new NextResponse(JSON.stringify({
        id: recipe.getId(),
        name: recipe.getName(),
        ingredients: recipe.getIngredients(),
        prepSteps: recipe.getPrepSteps(),
    }))
}