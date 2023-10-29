
import FormBody from "./FormBody";
import {Button} from "@nextui-org/react";


export function EditForm({ data }) {

    async function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        const response= await fetch(`http://localhost:3000/api/recipe/${data.id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                name: formData.get('name') || "",
                ingredients: formData.getAll('ingredient'),
                prepSteps: formData.get('prepSteps') || "",
                imageUrl: formData.get('imageUrl') || "",
            }),
        })

        const recipe = await response.json()

        console.log(recipe)
    }

    return <form onSubmit={handleSubmit}>
        <FormBody data={data} />
        <Button type='submit'>Save</Button>
    </form>
}