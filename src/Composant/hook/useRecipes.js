import {useEffect, useState} from "react";
import { getRecipes } from "../../services/recipesAPI";

//how we can have the pagination!?

export function useRecipes()
{
    const [recipes, setRecipes]=useState(null);

    useEffect(()=>
    {
        const abortCtrl= new AbortController();
        const signal = abortCtrl.signal;
        getRecipes( signal)
        .then((data) => {setRecipes(data['hydra:member'])})
        .catch ((error)=> console.log('error from  reciepes fetch', error))
    }, []);
    return({
        recipes,
        setRecipes
    });
}
export default useRecipes;