'use client'

import {Button, ModalBody, ModalContent, ModalHeader} from "@nextui-org/react";
import Link from "next/link";
import RecipeDetail from "../../../../components/RecipeDetail";
import {useContext} from "react";
import {Context} from "../../../../components/Context";
import { useRouter } from "next/navigation";

export default function EditForm({params}) {

    const {list} = useContext(Context)
    const router = useRouter()
    const recipe = list.find((x) => x.id === params.id)

    if(!recipe)
        router.push("/")

    return recipe && (
        <ModalContent>
        {() => (
            <>
                <ModalHeader className="flex bg-gray-900 text-white align-middle rounded-lg">
                    <h1 className='flex flex-col justify-center'>{recipe.name}</h1>
                    <div className='flex justify-end w-full mr-2'>
                        <Button as={Link} href={`/recipe/${params.id}/edit`} className='bg-inherit text-blue-600 hover:bg-blue-200'>Edit</Button>
                        <Button as={Link} href={`/recipe/${params.id}/del`} className='bg-inherit text-danger hover:bg-danger-200'>Delete</Button>
                    </div>
                </ModalHeader>
                <ModalBody className='bg-white'>
                    <RecipeDetail id={params.id} />
                </ModalBody>
            </>
        )}
    </ModalContent>
    )
    
}