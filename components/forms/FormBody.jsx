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
            <Input label='Name' name='name' defaultValue={data.name}/>
        </>
    )
}