import Image from "next/image";
import {Input} from "@nextui-org/react";

export default function Search() {

    function handleChange(event){
    }

    return <Input
        type='search'
        startContent={<Image src='/search.ico' alt='search' width={35} height={0}/>}
        placeholder="Search by Recipe, Ingredient or Author"
        className='w-full'
        onChange={handleChange}
    />
}