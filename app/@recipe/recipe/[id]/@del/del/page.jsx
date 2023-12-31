'use client'

import {Button, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import Link from "next/link";
import {useContext} from "react";
import {Context} from "../../../../../../components/Context";
import {useRouter} from "next/navigation";

export default function DeleteForm({params}) {

    const {list, actTrigger} = useContext(Context)
    const router = useRouter()
    const recipe = list.find((x) => x.id === params.id)

    async function handleRemove() {
        router.push('/')
        await fetch(`http://localhost:3000/api/recipe/${params.id}`, {
            method: 'DELETE',
        })
        actTrigger()
    }

    return <ModalContent>
        {() => (recipe && (
                <>
                    <ModalHeader className="flex flex-col gap-1 text-white">Delete {recipe.name}</ModalHeader>
                    <ModalBody className='text-white'>
                        <p>Are you sure you want to remove {recipe.name} from the recipe list?</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" as={Link} href={`/recipe/${params.id}`}>
                            Cancel
                        </Button>
                        <Button color="primary" onPress={handleRemove}>
                            Delete
                        </Button>
                    </ModalFooter>
                </>
            )

        )}
    </ModalContent>
}