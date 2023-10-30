'use client'

import {Button, Input, Textarea} from "@nextui-org/react";
import {useEffect, useRef, useState} from "react";


export default function FormBody(props) {

    const [check, setCheck] = useState(false)
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
        const ingredient = formData.get('new_ingredient') || ''
        if (ingredient.length > 0)
            setIngredients([...ingredients, ingredient])
        toggleCheck()
    }

    function handleRemoveIngredient(ingredientName) {
        return () => {
            setIngredients(ingredients.filter((ingredient) => ingredient !== ingredientName))
        }
    }

    useEffect(() => {
        setIngredients(data.ingredients)
        return () => setIngredients([])
    }, []);


    return (
        <div className="flex flex-col gap-2 text-black">
            <Input label="Name" name="name" defaultValue={data.name} isRequired/>
            <div>
                <h2 className="text-white">Ingredients</h2>
                <ul className="flex flex-col gap-1">
                    {ingredients.map(ingredient => (
                        <li key={ingredient}>
                            <Input
                                name="ingredient"
                                value={ingredient}
                                endContent={
                                    <Button
                                        onPress={handleRemoveIngredient(ingredient)}
                                        className="bg-inherit text-danger"
                                    >
                                        delete
                                    </Button>
                                }/>
                        </li>
                    ))}
                    <li>
                        {check ? (
                            <>
                                <form ref={formRef}>
                                    <Input name="new_ingredient"
                                           placeholder="Ingredient's name"
                                           autoFocus
                                           endContent={
                                               <Button
                                                   onPress={handleIngredient}
                                                   className="bg-inherit text-success"
                                               >
                                                   OK
                                               </Button>
                                           }
                                    />
                                </form>
                            </>
                        ) : (
                            <Button onPress={toggleCheck} variant="ghost" color='success'
                                    className="border-2 border-dotted border-success text-white w-full"
                            >
                                Add Ingredient
                            </Button>
                        )}
                    </li>
                </ul>
            </div>
            <Textarea label="Preparation Steps" name="prepSteps" defaultValue={data.prepSteps}/>
            <Input label="Image URL" name="imageUrl" defaultValue={data.imageUrl}/>
        </div>
    )
}