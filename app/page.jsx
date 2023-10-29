import RecipeList from "../components/RecipeList";

const getRecipes = () => fetch('http://localhost:3000/api/recipes', {
    next: {
        tags: ['recipeList',],
    }
}).then(response => response.json())

export default async function Home() {
    return <div className='bg-gray-200 h-full p-2'>
        <RecipeList recipes={await getRecipes()} />
    </div>
}