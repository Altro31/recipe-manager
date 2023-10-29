'use client'

import RecipeCard from "../components/RecipeCard"
import RecipeDetail from '../components/RecipeDetail'
import { useDisclosure, Button, Modal, ModalBody, ModalHeader, ModalContent } from '@nextui-org/react'
import { useState } from "react"
import {EditForm} from "./forms/EditForm";

export default function RecipeList({ recipes }) {
    const [recipeList, setRecipeList] = useState(recipes)
    if (!recipeList) return 'There is no recipes'
    return <ul>
        {recipeList.map(recipe => (
            <li key={recipe.id}>
                <RecipeContainer data={recipe} handleRecipes={setRecipeList} />
            </li>
        ))}
    </ul>
}

function RecipeContainer({ data, handleRecipes }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const [editing, setEditing] = useState(false)

    function deleteRecipe(id, onClose) {
        return function () {
            fetch(`http://localhost:3000/api/recipe/${id}`, { method: 'delete' }).then(response => {
                onClose()
                response.json().then(({ body }) => {
                    handleRecipes(body)
                })
            })
        }
    }

    return (
        <>
            <RecipeCard data={data} openDetail={onOpen} />
            <div>Hola</div>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={editing} className="">
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader>
                                <Button onClick={() => setEditing(!editing)}>Edit</Button>
                                <Button onClick={deleteRecipe(data.id, onClose)}>Delete</Button>
                            </ModalHeader>
                            <ModalBody>
                                {editing ? (
                                    <EditForm data={data} />
                                ) : (
                                    <RecipeDetail data={data} />
                                )}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    )
}

