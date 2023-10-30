import Image from "next/image";
import {Input} from "@nextui-org/react";
import {useContext} from "react";
import {Context} from "./Context";

export default function Search() {

    const {setFilter} = useContext(Context)

    return <Input
        type='search'
        startContent={<Image src='/search.ico' alt='search' width={35} height={0}/>}
        placeholder="Search by Recipe or Ingredient"
        className='w-full'
        onChange={(event)=>setFilter(event.target.value)}
    />
}