'use client'

import {createContext, useEffect, useState} from "react";

export const Context = createContext()

export function Provider({children}) {

    const [list, setList] = useState([])
    const [trigger, setTrigger] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3000/api/recipes').then(res => res.json().then(setList))
    }, [trigger]);

    function add(recipe) {
        list.push(recipe)
        setList(list)
        actTrigger()
    }

    function remove(id) {
        setList(list.filter((recipe) => recipe.id !== id))
        actTrigger()
    }

    function replace(id, recipe) {
        const target = list.find((recipe) => recipe.id === id)
        target.name = recipe.name
        target.ingredients = recipe.ingredients
        target.prepSteps = recipe.prepSteps
        target.urlImage = recipe.urlImage
        setList(list)
        actTrigger()
    }

    function actTrigger() {
        setTrigger(trigger + 1)
    }

    return <Context.Provider value={{actTrigger, list}}>
        {children}
    </Context.Provider>
}