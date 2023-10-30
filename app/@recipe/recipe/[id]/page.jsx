'use client'

import {Button, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import Link from "next/link";
import RecipeDetail from "../../../../components/RecipeDetail";
import {useContext} from "react";
import {Context} from "../../../../components/Context";

export default function EditForm({params}){

    const {list} = useContext(Context)
    const recipe = list.find((x)=>x.id === params.id)

    return <ModalContent>
        {(onClose) => (
            <>
                <ModalHeader className="flex">
                    {recipe.name}
                    <Button as={Link} href={`/recipe/${params.id}/edit`}>Edit</Button>
                    <Button as={Link} href={`/recipe/${params.id}/del`}>Delete</Button>
                </ModalHeader>
                <ModalBody>
                    <RecipeDetail id={params.id} />
                </ModalBody>
            </>
        )}
    </ModalContent>
}