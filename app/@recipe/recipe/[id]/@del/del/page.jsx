'use client'

import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import Link from "next/link";
import {useContext} from "react";
import {Context} from "../../../../../../components/Context";

export default function EditForm({params}){

    const {list} = useContext(Context)
    const recipe = list.find((x)=>x.id === params.id)

    return <ModalContent>
        {(onClose) => (
            <>
                <ModalHeader className="flex flex-col gap-1">Delete {recipe.name}</ModalHeader>
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" as={Link} href='/'>
                        Cancel
                    </Button>
                    <Button color="primary" as={Link} href='/'>
                        Delete
                    </Button>
                </ModalFooter>
            </>
        )}
    </ModalContent>
}