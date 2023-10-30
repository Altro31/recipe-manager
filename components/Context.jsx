'use client'

import {createContext, useEffect, useState} from "react";

export const Context = createContext()

export function Provider({children}) {

    const [list, setList] = useState([])
    const [trigger, setTrigger] = useState(0)
    const [filter, setFilter] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/api/recipes').then(res => res.json().then(recipes => (
            setList(recipes.filter(recipe => (
                recipe.name.toLowerCase().includes(filter.toLowerCase())
            ) || (
                recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(filter.toLowerCase()))
            )))
        )))
    }, [trigger, filter]);

    function actTrigger() {
        setTrigger(trigger + 1)
    }

    return <Context.Provider value={{actTrigger, list, setFilter}}>
        {children}
    </Context.Provider>
}