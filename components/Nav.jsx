'use client'

import {Button, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import Link from "next/link";
import Search from "./Search";

export default function Nav() {
    return <Navbar className='bg-slate-900/95'>
        <NavbarBrand className='text-white font-bold text-2xl'>Recipe Manager</NavbarBrand>
        <NavbarContent justify={"center"} className='w-8/12'>
            <NavbarItem className='w-8/12'>
                <Search />
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify={"end"}>
            <NavbarItem>
                <Button as={Link} href='/recipe/new' className='bg-success-600 text-white'>New Recipe</Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
}