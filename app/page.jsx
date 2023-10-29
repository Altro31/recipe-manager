import RecipeList from "../components/RecipeList";

const getRecipes = () => fetch('http://localhost:3000/api/recipes').then(response => response.json())

export default async function Home() {
    return <RecipeList recipes={await getRecipes()}/>
}