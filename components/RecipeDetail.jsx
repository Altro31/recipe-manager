import Image from "next/image"

export default function RecipeDetail({ data }) {
    return (
        <div>
            {data ? (
                <div>
                    <h1>{data.name}</h1>
                    <Image src={data.imageUrl} alt={data.name} />
                    <h2>Ingredients</h2>
                    <ul>
                        {data.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                    <h2>Steps</h2>
                    <p>{data.prepSteps}</p>
                </div>
            ) : (
                <p>No existe una receta con el id {data.id}</p>
            )}
        </div>
    )
}

