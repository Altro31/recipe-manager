import {Input} from "@nextui-org/react";


export default function FormBody(props) {

    const data = props.data || {
        name: '',
        ingredients: [],
        prepSteps: '',
        imageUrl: '',
    }

    return (
        <>
            <Input label='Product name' name='Product name' defaultValue={data.name}/>
            <Input label='Ingredients' name='Ingredients' defaultValue={data.ingredients}/>
            <Input label='Prep Steps' name='Prep Steps' defaultValue={data.prepSteps}/>
            <Input label='Image URL' name='Image URL' defaultValue={data.imageUrl}/>

        </>
    )
}