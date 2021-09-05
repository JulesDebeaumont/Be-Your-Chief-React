import React from 'react';
import FormGeneral from "../../Elements/recipe/FormGeneral";
import PropTypes from "prop-types";
import {oRecipe} from "./Create";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import CreateStep2 from "./CreateStep2";
import CreateStep3 from "./CreateStep3";
import CreateStep4 from "./CreateStep4";
import {useSelector} from "react-redux";

export function CreateStep1 () {

    return (
        <div className='createstep1'>
            <h2>General information</h2>
            <FormGeneral recipe={oRecipe}/>
        </div>
    );
}


export default CreateStep1;