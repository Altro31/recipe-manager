'use client'

import {Button, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import Link from "next/link";
import {useContext, useRef} from "react";
import {Context} from "../../../../../../components/Context";
import {useRouter} from "next/navigation";
import FormBody from "../../../../../../components/FormBody";

export default function EditForm({params}) {

    const {list, actTrigger} = useContext(Context)
    const recipe = list.find((x) => x.id === params.id)
    const router = useRouter()
    const formRef = useRef()

    async function handleEdit() {

        const formData = new FormData(formRef.current)
        await fetch(`http://localhost:3000/api/recipe/${params.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: formData.get('name') || "",
                ingredients: formData.getAll('ingredient'),
                prepSteps: formData.get('prepSteps') || "",
                imageUrl: formData.get('imageUrl') || "",
            }),
        })

        actTrigger()
        router.push(`/recipe/${params.id}`)
    }

    return <ModalContent>
        {() => (recipe && (
                <>
                    <ModalHeader className="flex flex-col gap-1 text-white">Editing {recipe.name}</ModalHeader>
                    <ModalBody>
                        <form ref={formRef}>
                            <FormBody data={recipe} />
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" as={Link} href={`/recipe/${params.id}`}>
                            Cancel
                        </Button>
                        <Button color="primary" onPress={handleEdit}>
                            Save
                        </Button>
                    </ModalFooter>
                </>
            )

        )}
    </ModalContent>
}