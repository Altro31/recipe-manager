import Link from "next/link";
import {Button} from "@nextui-org/react";

export default function Nav() {
    return (
        <>
            <Button as={Link} href='/recipe/new'>New Recipe</Button>
        </>
    )
}