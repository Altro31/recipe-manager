'use client'

import {useContext} from "react";
import {Context} from "./Context";
import {Listbox, ListboxItem, ListboxSection, Textarea} from "@nextui-org/react";


export default function RecipeDetail({id}) {

    const {list} = useContext(Context)
    const recipe = list.find((x) => x.id === id)

    return (
        <div>
            {recipe ? (
                <div>
                    <Listbox>
                        <ListboxSection title='Ingredients'>
                            {recipe.ingredients.map((ingredient) => (
                                <ListboxItem key={ingredient}>
                                    {ingredient}
                                </ListboxItem>
                            ))}
                        </ListboxSection>
                    </Listbox>
                    <Textarea label='Preparation Steps' value={recipe.prepSteps} isReadOnly/>
                </div>
            ) : (
                <p>No existe una receta con el id {recipe.id}</p>
            )}
        </div>
    )
}

