
const getRecipe = (recipeId) => {
    return fetch(`/api/recipe/${recipeId}`).then(response => response.json())
}

export default async function RecipeDetail({ id }) {
    const recipe = await getRecipe(id)

    return (
        <div>
            {recipe ? (
                <div>
                    <h1>{recipe.name}</h1>
                    <img src={recipe.imageUrl} alt={recipe.name} />
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
                <p>No existe una receta con el id {id}</p>
            )}
        </div>
    )
}

