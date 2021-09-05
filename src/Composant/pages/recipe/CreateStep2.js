import React, {useEffect, useState} from 'react';
import FormQuantities from "../../Elements/recipe/FormQuantities";
import {oRecipe} from "./Create";

export function CreateStep2 () {



    return (
        <div className='createstep2'>
            <h2>Add ingredients</h2>
            <FormQuantities recipe={oRecipe} />
        </div>
    );
}

export default CreateStep2;