import {getUrl} from "./allAPI";


export function getRecipes()
{
    return( 
        fetch(getUrl('recipes'))
        .then(response => {
            if (!response.ok)
                throw new Error('There is no reponse ')
            else 
                return response.json();
        
        }));
}

export function getRecipeById(id)
{
    return(
        fetch(getUrl('recipes/' + id))
            .then(response =>
                response.json()
            )
    )
}

export function postRecipe(recipe)
{
    return(
        fetch(getUrl('recipes'), {
            method: "POST",
            body: JSON.stringify(recipe),
            headers: new Headers({
                "Content-Type": "application/ld+json"
            })
        }).then(
            response => {
                if(response.ok) {
                    alert("Your recipe has been added sucessfully!");
                    return response.json();
                } else {
                    throw new Error('An error occured. No recipe posted.')
                }

        }));
}

export function patchRecipe(recipe)
{
    return(
        fetch(getUrl('recipes/' + recipe.id), {
            method: "PATCH",
            body: JSON.stringify(recipe),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then(response => response.json()));
}

export function deleteRecipe(id)
{
    return(
        fetch(getUrl('recipes/' + id), {
            method: "DELETE"
        })
    )
}

