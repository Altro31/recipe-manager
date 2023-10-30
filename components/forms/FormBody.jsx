import {Input, Textarea} from "@nextui-org/react";


export default function FormBody(props) {

    const data = props.data || {
        name: '',
        ingredients: [],
        prepSteps: '',
        imageUrl: '',
    }

    return (
        <>
            <Input label="Name" name="name" defaultValue={data.name}/>
            <Textarea label="Preparation Steps" name="prepSteps" defaultValue={data.prepSteps}/>
            <Input label="Image URL" name="imageUrl" defaultValue={data.imageUrl}/>
        </>
    )
}