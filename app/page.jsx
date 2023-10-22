'use client'

import { useEffect, useState } from "react"

export default function Main() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/recipes').then(respone => {
            respone.json().then(setRecipes)
        })
    }, []);



    return <ul>
        {recipes.map((recipe) => (
            <li key={recipe.id}>
                <p>Name: {recipe.name}</p>
                <div>
                    <h2>Ingredients:</h2>
                    <ul>
                        {recipe.ingredients.map(ingredient => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Preparation Steps</h2>
                    <p>{recipe.prepSteps}</p>
                </div>
            </li>
        ))}
    </ul>
}