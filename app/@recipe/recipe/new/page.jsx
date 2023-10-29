'use client'

import {Button, Input, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea} from "@nextui-org/react";
import Link from "next/link";

import {Modal} from "@nextui-org/react";
import {usePathname, useRouter} from "next/navigation";
import {useContext, useRef} from "react";
import {Context} from "../../../../components/Context";

export default function Layout(){

    const url = usePathname()
    const open = url==='/recipe/new'
    const formRef = useRef()
    const router = useRouter()
    const {add} = useContext(Context)

    async function handleForm(event){
        const formData = new FormData(formRef.current)

        const result = await fetch('http://localhost:3000/api/recipe/new',{
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name') || "",
                ingredients: formData.getAll('ingredient'),
                prepSteps: formData.get('prepSteps') || "",
                imageUrl: formData.get('imageUrl') || "",
            }),
        })

        add(await result.json())

        router.push('/')
    }

    return (
        <Modal
            isOpen={open}
            isDismissable={false}
            hideCloseButton
            backdrop='blur'
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <h3>Create New Recipe</h3>
                        </ModalHeader>
                        <ModalBody>
                            <form ref={formRef}>
                                <Input label='Name' name='name' />
                                <Textarea label='Preparation Steps' name='prepSteps'/>
                                <Input label='Image URL' name='imageURL' />
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" as={Link} href='/'>
                                Cancel
                            </Button>
                            <Button color="primary" onPress={handleForm}>
                                Create
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )

}