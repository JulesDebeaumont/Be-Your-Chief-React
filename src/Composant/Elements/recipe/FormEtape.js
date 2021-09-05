import {useState} from "react";
import TextInputBox from "../components/TextInputBox";
import React from 'react';

export function FormEtape({count, etape, onSubmit}) {
    const [nameEtape, setNameEtape] = useState(etape.name);
    const [descEtape, setDescEtape] = useState(etape.descr);

    let myEtape = {
        num: count,
        name: nameEtape,
        descr: descEtape,
    }

    return(
        <div className='formstep'>
            <TextInputBox label={'etape N°' + count} value={nameEtape} onChange={(x) => setNameEtape(x)}/>
            <TextInputBox label={'etape description'} value={descEtape} onChange={(x) => setDescEtape(x)}/>
            <button
                onClick={
                    () => {
                        myEtape.num = count;
                        onSubmit(myEtape);
                    }
                }>Add step</button>

        </div>
    );
}