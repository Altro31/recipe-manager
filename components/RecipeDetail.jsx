'use client'

import Image from "next/image"
import {useContext} from "react";
import {Context} from "./Context";



export default function RecipeDetail({ id }) {

    const {list} = useContext(Context)
    const recipe = list.find((x)=>x.id === id)

    return (
        <div>
            {recipe ? (
                <div>
                    <h1>{recipe.name}</h1>
                    <Image src={recipe.imageUrl} alt={recipe.name} />
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                    <h2>Steps</h2>
                    <p>{recipe.prepSteps}</p>
                </div>
            ) : (
                <p>No existe una receta con el id {recipe.id}</p>
            )}
        </div>
    )
}

