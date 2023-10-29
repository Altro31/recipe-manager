import { NextResponse } from "next/server";
import { recipeManager } from '../../data'
import { RecipeModel } from "../../(defs)/models";

export function GET() {

    const body: RecipeModel[] = []
    for (const recipe of recipeManager.getRecipeList()) {
        body.push({
            id: recipe.getId(),
            name: recipe.getName(),
            ingredients: recipe.getIngredients(),
            prepSteps: recipe.getPrepSteps(),
            imageUrl: recipe.getImageUrl(),
        })
    }

    return new NextResponse(JSON.stringify(body))
}