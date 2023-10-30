'use client'

import RecipeCard from "../components/RecipeCard"
import {useContext, useEffect, useState} from "react"
import {Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";
import {Context} from "./Context";

export default function RecipeList({ recipes }) {
    const {list} = useContext(Context)

    if (!list) return 'There is no recipes'

    return <ul className='w-10/12 grid lg:grid-cols-4 sm:grid-cols-2 gap-3 mx-auto'>
        {list.map(recipe => (
            <li key={recipe.id}>
                <RecipeCard data={recipe} />
            </li>
        ))}
    </ul>
}