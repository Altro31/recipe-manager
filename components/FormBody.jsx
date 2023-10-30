'use client'

import {Button, Input, Textarea} from "@nextui-org/react";
import {useEffect, useRef, useState} from "react";


export default function FormBody(props) {

    const [check, setCheck] = useState(false)
    const inputRef = useRef()
    const formRef = useRef()

    const data = props.data || {
        name: '',
        ingredients: [],
        prepSteps: '',
        imageUrl: '',
    }

    const [ingredients, setIngredients] = useState([])

    const toggleCheck = () => setCheck(!check)

    function handleIngredient() {
        const formData = new FormData(formRef.current)
        const ingredient = formData.get('new_ingredient')
        setIngredients([...ingredients, ingredient])
        toggleCheck()
    }
    
    function handleRemoveIngredient(ingredientName) {
        return ()=>{
            setIngredients(ingredients.filter((ingredient)=>ingredient!==ingredientName))
        }
    }

    useEffect(() => {
        setIngredients(data.ingredients)
        return () => setIngredients([])
    }, []);


    return (
        <>
            <Input label="Name" name="name" defaultValue={data.name}/>
            <div>
                <h3>Ingredients</h3>
                <ul>
                    {ingredients.map(ingredient => (
                        <li key={ingredient}>
                            <Input
                                name="ingredient"
                                value={ingredient}
                                endContent={
                                    <Button
                                        onPress={handleRemoveIngredient(ingredient)}
                                        className="bg-danger"
                                    >
                                        OK
                                    </Button>
                                }
                            />
                        </li>
                    ))}
                </ul>
                <div className="flex">
                    {check ? (
                        <>
                            <form ref={formRef}>
                                <Input name="new_ingredient"
                                       placeholder="Ingredient's name"
                                       endContent={
                                           <Button
                                               onPress={handleIngredient}
                                               className="bg-inherit"
                                           >
                                               OK
                                           </Button>
                                       }
                                />
                            </form>
                        </>
                    ) : (
                        <Button onPress={toggleCheck} variant='ghost' className='border-2 border-dotted border-success'>Add Ingredient</Button>
                    )}
                </div>
            </div>
            <Textarea label="Preparation Steps" name="prepSteps" defaultValue={data.prepSteps}/>
            <Input label="Image URL" name="imageUrl" defaultValue={data.imageUrl}/>
        </>
    )
}