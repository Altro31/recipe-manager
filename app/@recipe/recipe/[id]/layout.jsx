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


    return (
        <Modal
            isOpen={open}
            isDismissable={false}
            backdrop="opaque"
            hideCloseButton={url !== `/recipe/${params.id}`}
            onClose={() => router.push('/')}
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