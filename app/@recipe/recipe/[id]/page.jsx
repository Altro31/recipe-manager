'use client'

import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import Link from "next/link";
import RecipeDetail from "../../../../components/RecipeDetail";
import {useParams, useRouter} from "next/navigation";
import {useContext} from "react";
import {Context} from "../../../../components/Context";

export default function EditForm({params}){

    const {list} = useContext(Context)
    const recipe = list.find((x)=>x.id === params.id)
    const router = useRouter()

    return <ModalContent>
        {(onClose) => (
            <>
                <ModalHeader className="flex">
                    {recipe.name}
                    <Button as={Link} href={`/recipe/${params.id}/edit`}>Edit</Button>
                    <Button as={Link} href={`/recipe/${params.id}/del`}>Delete</Button>
                    <Button isIconOnly onPress={()=>router.push('/')}>X</Button>
                </ModalHeader>
                <ModalBody>
                    <RecipeDetail id={params.id} />
                </ModalBody>
            </>
        )}
    </ModalContent>
}