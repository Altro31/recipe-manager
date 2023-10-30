'use client'

import {Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea} from "@nextui-org/react";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useContext, useRef} from "react";
import {Context} from "../../../../components/Context";
import FormBody from "../../../../components/FormBody";

export default function Layout() {

    const url = usePathname()
    const open = url === '/recipe/new'
    const formRef = useRef()
    const router = useRouter()
    const {actTrigger} = useContext(Context)

    async function handleForm(event) {
        const formData = new FormData(formRef.current)
        const result = await fetch('http://localhost:3000/api/recipe/new', {
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name') || "",
                ingredients: formData.getAll('ingredient'),
                prepSteps: formData.get('prepSteps') || "",
                imageUrl: formData.get('imageUrl') || "",
            }),
        })

        actTrigger()
        router.push('/')
    }

    return (
        <Modal
            isOpen={open}
            isDismissable={false}
            hideCloseButton
            backdrop="blur"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <h3>Create New Recipe</h3>
                        </ModalHeader>
                        <ModalBody>
                            <form ref={formRef}>
                                <FormBody />
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" as={Link} href="/">
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