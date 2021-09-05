import React, {useState} from "react";
import {TextInputBox} from "../components/TextInputBox";
import {NumberInputBox} from "../components/NumberInputBox";
import PropTypes from "prop-types";

export function FormGeneral ({recipe}) {

    const [name, setName] = useState(recipe.name);
    const [description, setDescription] = useState(recipe.description);
    const [prepTime, setPrepTime] = useState(recipe.prepTime);
    const [cookTime, setCookTime] = useState(recipe.cookTime);
    const [servingNb, setServingNb] = useState(recipe.servingNb);
    const [difficulty, setDifficulty] = useState(recipe.difficulty);
    const [priceLvl, setPriceLvl] = useState(recipe.priceLvl);

    recipe.name = name;
    recipe.description = description;
    recipe.prepTime = prepTime;
    recipe.cookTime = cookTime;
    recipe.servingNb = servingNb;
    recipe.difficulty = difficulty;
    recipe.priceLvl = priceLvl;

    return (
        <div className='formgeneral'>

            <TextInputBox
                label="name of the recipe"
                name='name_recipe'
                value={recipe.name}
                onChange={(x) => setName(x)}/>

            <TextInputBox
                label="description of the recipe"
                name='description_recipe'
                value={recipe.description}
                onChange={(x) => setDescription(x)}/>

            <NumberInputBox
                label="time of preparation"
                name='prep_time'
                value={recipe.prepTime}
                max="1380"
                onChange={(x) => setPrepTime(x)}/>

            <NumberInputBox
                label="time of cooking"
                name='cook_time'
                value={recipe.cookTime}
                max="1380"
                onChange={(x) => setCookTime(x)}/>

            <NumberInputBox
                label="numbers of servings"
                name='serving_number'
                value={recipe.servingNb} max="20"
                onChange={(x) => setServingNb(x)}/>

            <NumberInputBox
                label="difficulty"
                name='difficulty'
                type='number'
                value={recipe.difficulty}
                max="5"
                onChange={(x) => setDifficulty(x)}/>

            <NumberInputBox
                label="price level"
                name='price_level'
                type='number'
                value={recipe.priceLvl}
                max="5"
                onChange={(x) => setPriceLvl(x)}/>

        </div>
    );
}


export default FormGeneral;