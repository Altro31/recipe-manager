'use client'

import {createContext, useState} from "react";

export const Context = createContext()

export function Provider({children}){

    const [list, setList] = useState([])
    const [change, setChange] = useState(0)

    function add(recipe){
        list.push(recipe)
        setList(list)
        setChange(change+1)
    }
    function remove(id){
        setList(list.filter((recipe)=> recipe.id !== id))
        setChange(change+1)
    }

    function replace(id, recipe){
        const target = list.find((recipe)=> recipe.id === id)
        target.name = recipe.name
        target.ingredients = recipe.ingredients
        target.prepSteps = recipe.prepSteps
        target.urlImage = recipe.urlImage
        setList(list)
        setChange(change+1)
    }

    return <Context.Provider value={{change,list,setList,add,remove,replace}}>
        {children}
    </Context.Provider>
}