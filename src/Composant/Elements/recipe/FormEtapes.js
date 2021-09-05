import {useState} from "react";
import {FormEtape} from "./FormEtape";
import TextInputBox from "../components/TextInputBox";
import React from 'react';

export function FormEtapes ({recipe}) {

    const [unfold, setUnfold] = useState(false);
    const [etapes, setEtapes] = useState(recipe.steps);

    recipe.steps = etapes;

    let myEtape = {
        num: 0,
        name: '',
        descr: ''
    };

    let count = recipe.steps.length;

    return (
        <div>
            {etapes.map((etape, i) => <FormEtape key={i} etape={etape}
                                                 count={i + 1}/>)}

            <button onClick={() => setUnfold(!unfold)}>ajouter</button>
            {unfold &&
            <FormEtape etape={myEtape}
                       count={++count}
                       onSubmit={
                           (x) => {
                               setEtapes(prevEtapes => [...prevEtapes, x]);
                           }}
            />
            }
        </div>
    );
}


export default FormEtapes;