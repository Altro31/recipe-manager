import { recipeManager } from '../../../data'
import {NextRequest, NextResponse} from "next/server"
import {revalidatePath, revalidateTag} from "next/cache";

export async function POST(request: NextRequest) {

    const body = await request.json()

    const recipe = recipeManager.addRecipe(
        body.name,
        body.ingredients,
        body.prepSteps,
        body.imageUrl
    )

    return new NextResponse(JSON.stringify({
        id: recipe.getId(),
        name: recipe.getName(),
        ingredients: recipe.getIngredients(),
        prepSteps: recipe.getPrepSteps(),
    }))
}