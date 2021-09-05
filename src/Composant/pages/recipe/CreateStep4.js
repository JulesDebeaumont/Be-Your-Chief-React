import React from 'react';
import FormCategories from "../../Elements/recipe/FormCategories";
import {oRecipe} from "./Create";

export function CreateStep4 () {
    return (
        <div className='createstep4'>
            <h2>add categories to your recipe</h2>
            <FormCategories recipe={oRecipe}/>
        </div>
    );
}

export default CreateStep4;