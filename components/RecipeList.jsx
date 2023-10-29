'use client'

import RecipeCard from "../components/RecipeCard"
import RecipeDetail from '../components/RecipeDetail'
import {useContext, useEffect, useState} from "react"
import {EditForm} from "./forms/EditForm";
import {Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";
import {Context} from "./Context";

export default function RecipeList({ recipes }) {
    const {change, list,setList} = useContext(Context)

    useEffect(() => {
        setList(recipes)
    }, [change]);

    if (!list) return 'There is no recipes'

    return <ul className='w-10/12 grid lg:grid-cols-4 sm:grid-cols-2 gap-3 mx-auto'>
        {list.map(recipe => (
            <li key={recipe.id}>
                <RecipeCard data={recipe} />
            </li>
        ))}
    </ul>
}