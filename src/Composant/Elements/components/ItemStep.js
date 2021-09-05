import {TextInputBox} from "./TextInputBox";
import {useEffect, useState} from "react";
import {getStepsByIri} from "../../../services/stepsApi";
import {setSteps} from "../../../store/steps";
import React from 'react';
export function ItemStep ({num, IriStep, onSubmit, onDelete}) {

    const [name, setName] = useState();
    const [descr, setDescr] = useState();

    useEffect(() => {
        getStepsByIri(IriStep).then((data) => {
            setSteps(data['hydra:member'])
        });
    })

    const newStep = {
        name: name,
        descr: descr,
        num: num,
    }

    return (
        <div className='ItemStep'>
            <h3>Step {num}</h3>
            <TextInputBox label='step name' value={name} onChange={(x) => setName(x)}/>
            <TextInputBox label='step description' value={name} onChange={(x) => setDescr(x)}/>
            <button type='submit' onClick={
                () => {
                    onSubmit(newStep);
                }
            }>update
            </button>
            <button type='submit' onClick={
                () => {
                    onDelete(newStep);
                }
            }>delete
            </button>

        </div>
    );
}