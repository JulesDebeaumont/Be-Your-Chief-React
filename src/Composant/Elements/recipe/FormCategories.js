import React, {useEffect, useState} from "react";
import {getRegimens} from "../../../services/regimensApi";
import {getTypes} from "../../../services/typesApi";
import {getOrigins} from "../../../services/originsApi";
import {getMenuTypes} from "../../../services/menuTypesApi";
import DropDownList from "../components/DropDownList";
import CheckedInputs from "../components/CheckedInputs";

export function FormCategories ({recipe}) {

    const [origin, setOrigin] = useState(recipe.origin);
    const [type, setType] = useState(recipe.type);
    const [regimen, setRegimen] = useState(recipe.regimen);
    const [menuType, setMenuType] = useState(recipe.menuType);
    const [regimens, setRegimens] = useState([]);
    const [types, setTypes] = useState([]);
    const [origins, setOrigins] = useState([]);
    const [menuTypes, setMenuTypes] = useState([]);


    recipe.origin = origin;
    recipe.type = type;
    recipe.regimen = regimen;
    recipe.menuType = menuType;


    useEffect(() => {

        getRegimens().then((data) => {
            setRegimens(data['hydra:member'])
        })

        getTypes().then((data) => {
            setTypes(data['hydra:member'])
        });

        getOrigins().then((data) => {
            setOrigins(data['hydra:member'])
        });

        getMenuTypes().then((data) => {
            setMenuTypes(data['hydra:member'])
        });

    }, [])


    return (
        <div className='form_categories'>
            <DropDownList label="origins"
                          list={origins}
                          onChange={(x) => setOrigin(x)}
                          firstItemLabel={'select'}
                          index={origin['@id']}
            />

            <DropDownList label="types"
                          list={types}
                          onChange={(x) => setType(x)}
                          firstItemLabel={'select'}
                          index={type['@id']}
            />

            <DropDownList label="regimens"
                          list={regimens}
                          onChange={(x) => setRegimen(x)}
                          firstItemLabel={'select'}
                          index={regimen['@id']}
            />

            <CheckedInputs label="select menu types"
                           list={menuTypes}
                           onCheck={
                               (x) => {
                                   setMenuType(prev => [...prev, x]);
                               }}
                           onDeCheck={
                               (x) => {
                                   setMenuType(menuType.filter(item => item !== x));
                               }
                           }
                           name='menu_types'
            />

        </div>
    );
}

export default FormCategories;