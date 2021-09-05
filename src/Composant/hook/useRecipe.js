import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRecipe } from "../../services/allAPI";


export function useRecipe()
{
    const {id}= useParams();
    const [recipe, setRecipe]=useState;
    useEffect(()=>
    {
        const abortCtrl = new AbortController();
        const signalId = abortCtrl.signal;
        getRecipe(id , signalId)
        .then((data) => {setRecipe(data)})
        .catch((error)=> console.log('error from  albums fetch', error))
    }, [id]);
    return(
        recipe
    );
}
export default useRecipe;