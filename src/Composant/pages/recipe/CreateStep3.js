import React from 'react';
import {FormEtape} from "../../Elements/recipe/FormEtape";
import {oRecipe} from "./Create";
import FormEtapes from "../../Elements/recipe/FormEtapes";

export function CreateStep3 () {
    return (
        <div className='createstep3'>
            <h2>add steps</h2>
            <FormEtapes recipe={oRecipe}/>
        </div>
    );
}

export default CreateStep3;