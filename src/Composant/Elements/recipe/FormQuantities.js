import {useEffect, useState} from "react";
import FormQuantity from "./FormQuantity";
import React from 'react';
import {getIngredients} from "../../../services/ingredientsApi";

export default function FormQuantities ({recipe}) {

    const [unfold, setUnfold] = useState(false);
    const [tQuantities, setQuantities] = useState(recipe.quantities);
    const [ingredients, setIngredients] = useState([]);
    let count = recipe.quantities.length;

    recipe.quantities = tQuantities;


    useEffect(() => {
        getIngredients().then((data) => {
            setIngredients(data['hydra:member'])
        });
    }, [])

    let myQuantity = {
        quantity: 0,
        displayOrder: 0,
        unit: 'g',
        ingredient: {
            '@id': '',
            id: 0,
            name: ''
        },
    };

    function handleUpdate (id, newQuantity) {
        tQuantities[id] = newQuantity;
    }

    function handleDelete (id) {
        delete tQuantities[id];
    }

    return (
        <div className='formQuantities'>
            <div>
                {tQuantities.map(
                    (quantity, i) =>
                        <div>
                            <h3>Ingredient N°{quantity.displayOrder}</h3>
                            <FormQuantity key={i}
                                          oQuantity={quantity}
                                          ingredients={ingredients}
                                          count={i+1}
                                          labelOnSubmit={'update'}
                                          onSubmit={(id, x) => handleUpdate(id, x)}
                                          onDelete={id => handleDelete(id)}/>
                        </div>
                )}
            </div>
            <div>
                <button onClick={() => setUnfold(!unfold)}>add ingredient</button>

                {unfold && <div>
                    <FormQuantity oQuantity={myQuantity}
                                  ingredients={ingredients}
                                  labelOnSubmit={'add'}
                                  count={++count}
                                  onSubmit={(x) => {
                                      setQuantities(qt => [...qt, x])
                                  }}/>
                </div>}

            </div>
        </div>
    );
}