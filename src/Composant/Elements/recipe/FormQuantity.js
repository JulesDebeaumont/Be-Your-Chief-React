import {NumberInputBox} from "../components/NumberInputBox";
import {useState} from "react";
import TextInputBox from "../components/TextInputBox";
import DropDownList from "../components/DropDownList";
import React from 'react';

export default function FormQuantity ({oQuantity, ingredients, count, onSubmit, labelOnSubmit, onDelete}) {

    const [quantity, setQuantity] = useState(oQuantity.quantity);
    const [displayOrder, setDisplayOrder] = useState(oQuantity.displayOrder);
    const [unit, setUnit] = useState(oQuantity.unit);
    const [ingredient, setIngredient] = useState(oQuantity.ingredient['@id']);

    let myQuantity = {
        quantity: quantity,
        displayOrder: displayOrder,
        unit: unit,
        ingredient: ingredient,
    };

    return (
        <div className='formquantity'>

            <NumberInputBox label='quantity'
                            value={quantity}
                            max='10000'
                            onChange={(x) => {setQuantity(x)}}/>

            <TextInputBox label='unit'
                          value={unit}
                          onChange={(x) => setUnit(x)}/>

            <DropDownList label='ingredient'
                          list={ingredients}
                          index={oQuantity.ingredient}
                          onChange={(x) => setIngredient(x)}/>

            <button
                onClick={
                    () => {
                        myQuantity.displayOrder = count;
                        onSubmit(myQuantity);
                    }
                }>{labelOnSubmit}</button>


            {/*
                (oQuantity.id !== null) &&
                    <button onClick={onDelete}>Delete</button>
            */}

        </div>
    );
}