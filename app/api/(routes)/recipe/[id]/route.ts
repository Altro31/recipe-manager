import { NextRequest, NextResponse } from "next/server";
import { recipeManager } from "../../../data";
import { RecipeModel } from "../../../(defs)/models";

type Params = {
    params: {
        id: string,
    },
}
export function GET(request: NextRequest, { params }: Params) {

    const recipe = recipeManager.getRecipeList().find(recipe => recipe.getId() === params.id)

    if(!recipe)
        return new NextResponse(JSON.stringify({
            status: 404,
            message: `There is no recipes with id: ${params.id}`
        }))

    return new NextResponse(JSON.stringify({
        id: recipe.getId(),
        name: recipe.getName(),
        ingredients: recipe.getIngredients(),
        prepSteps: recipe.getPrepSteps(),
    }))
}

export function DELETE(request: NextRequest, {params}: Params){
    
    recipeManager.removeRecipe(params.id)

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
    
    return new NextResponse(JSON.stringify({
        status: 200,
        body
    }))
}

export async function PATCH(request: NextRequest, {params}:Params){

    const body = await request.json()

    const recipe = recipeManager.getRecipeList().find(recipe => recipe.getId() === params.id)

    if(!recipe)
        return new NextResponse(JSON.stringify({
            status: 404,
            message: `There is no recipes with id: ${params.id}`
        }))

    console.log(recipe)
    recipe.setName(body.name)
    recipe.getIngredients().length = 0
    for(const ingredient of body.ingredients){
        recipe.getIngredients().push(ingredient)
    }
    recipe.setPrepSteps(body.prepSteps)
    recipe.setImageUrl(body.imageUrl)

    return new NextResponse(JSON.stringify({
        id: recipe.getId(),
        name: recipe.getName(),
        ingredients: recipe.getIngredients(),
        prepSteps: recipe.getPrepSteps(),
        urlImage: recipe.getImageUrl()
    }))
}