import {FormRecipe} from "./recipe/FormRecipe";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchRecipes} from "../../store/recipes";
import {useEffect, useState} from "react";
import {getRecipeById} from "../../services/recipesAPI";
import React from 'react';

export function Detail () {

    const {id} = useParams();

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        getRecipeById(id).then(data => {
            setRecipe(data['hydra:member']);
        });
    }, [])


    if (recipe === null)
        return <div>loading</div>

    return (
        <div>
            <FormRecipe recipe={recipe}/>
        </div>
    );
}