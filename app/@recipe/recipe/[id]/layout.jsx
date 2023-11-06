'use client'

import {Modal} from "@nextui-org/react";
import {usePathname, useRouter} from "next/navigation";


export default function Layout({children, params, edit, del}) {

    const url = usePathname()
    const router = useRouter()
    const urls = [
        `/recipe/${params.id}/del`,
        `/recipe/${params.id}/edit`,
        `/recipe/${params.id}`,
    ]
    const open = urls.includes(url)
    const hideButton = (url===`/recipe/${params.id}`) || (url==="/")


    return (
        <Modal
            isOpen={open}
            isDismissable={false}
            backdrop="blur"
            hideCloseButton={!hideButton}
            onClose={() => router.push('/')}
            size='3xl'
            scrollBehavior='inside'
            className='bg-gray-900'
        >
            {url === `/recipe/${params.id}/del` ? (
                del
            ) : url === `/recipe/${params.id}/edit` ? (
                edit
            ) : (
                children
            )}

        </Modal>
    )

}