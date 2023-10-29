'use client'

import {Button, Modal} from "@nextui-org/react";
import {usePathname, useRouter} from "next/navigation";

export default function Layout({children, params, edit, del}){

    const url = usePathname()
    const router = useRouter()
    const open = params.id || false

    return (
        <Modal
            isOpen={open}
            isDismissable={false}
            backdrop='blur'
            hideCloseButton
        >
            {url===`/recipe/${params.id}` && children}
            {url===`/recipe/${params.id}/edit` && edit}
            {url===`/recipe/${params.id}/del` && del}
        </Modal>
    )
}