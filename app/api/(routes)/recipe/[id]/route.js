import { NextResponse } from "next/server";
import { recipeManager } from "../../../data";

export function GET(request, { params }) {

    const recipe = recipeManager.getRecipeList().find(recipe => recipe.getId() === params.id)

    return new NextResponse(JSON.stringify({
        id: recipe.getId(),
        name: recipe.getName(),
        ingredients: recipe.getIngredients(),
        prepSteps: recipe.getPrepSteps(),
    }))
}

export function DELETE(request, {params}){
    
    recipeManager.removeRecipe(params.id)
    
    return new NextResponse(JSON.stringify({
        status: 200,
    }))
}

export async function PATCH(request, {params}){
    const formData = await request.formData()
    const recipe = recipeManager.getRecipeList().find(recipe => recipe.getId() === params.id)

    return new NextResponse(JSON.stringify({
        id: recipe.getId(),
        name: recipe.getName(),
        ingredients: recipe.getIngredients(),
        prepSteps: recipe.getPrepSteps(),
    }))
}