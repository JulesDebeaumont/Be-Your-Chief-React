import {FormRecipe} from "../../Elements/recipe/FormRecipe";
import {useDispatch, useSelector} from "react-redux";
import {fetchCreateRecipes, newRecipe} from "../../../store/recipes";
import React, {useState} from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Router, Switch, useHistory} from "react-router";
import CreateStep1 from "./CreateStep1";
import CreateStep2 from "./CreateStep2";
import CreateStep3 from "./CreateStep3";
import CreateStep4 from "./CreateStep4";
import {postRecipe} from "../../../services/recipesAPI";


export let oRecipe = {
    name: "",
    description: "",
    prepTime: 0,
    cookTime: 0,
    servingNb: 2,
    note: 0,
    difficulty: 0,
    priceLvl: 0,
    quantities: [],
    comments: [],
    origin: "",
    type: "",
    regimen: "",
    steps: [],
    menuType: [],
};

function handleRoute(nav) {
    switch(nav) {
        case 1:
            return (<CreateStep1/>);
            break;
        case 2:
            return (<CreateStep2/>);
            break;
        case 3:
            return (<CreateStep3/>);
            break;
        case 4:
            return (<CreateStep4/>);
            break;
        default:
            return (<div>error</div>);
    }
}


export function CreateRecipe () {

    const history = useHistory();
    const [nav, setNav] = useState(1);


    return (
        <div>
            <h1>Create new recipe</h1>
            <button onClick={
                () => {
                    setNav(((nav-1) < 1 ) ? 1 : (nav-1) )
                }
            }>PREVIOUS</button>
            <button onClick={
                () => {
                    if((nav + 1 ) > 4) {
                        console.log(oRecipe);
                        postRecipe(oRecipe);
                        setNav(1);
                    } else {
                        setNav(nav + 1)
                    }
                }
            }>NEXT</button>
            {handleRoute(nav)}
        </div>

    );
}

export default CreateRecipe;