'use server'
import FormBody from "./FormBody";

export async function CreateForm() {
    return <form
        action='http://localhost:3000/api/recipe/new'
        method='post'
    >
        <FormBody />
        <button type='submit'>Create</button>
    </form>
}