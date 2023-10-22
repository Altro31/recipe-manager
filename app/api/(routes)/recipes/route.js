import { NextResponse } from "next/server";
import { recipeManager } from '../data'

export function GET() {

    const body = []
    for (const recipe of recipeManager.getRecipeList()) {
        body.push({
            id: recipe.getId(),
            name: recipe.getName(),
            ingredients: recipe.getIngredients(),
            prepSteps: recipe.getPrepSteps(),
        })
    }

    return new NextResponse(JSON.stringify(body))
}