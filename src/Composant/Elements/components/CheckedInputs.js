import React from 'react';

export function CheckedInputs ({list, label, name, listDefault, onCheck, onDeCheck}) {

    return (
        <div className="radioslist">
            <label>
                <div>{label}</div>

                {list.map((element) =>
                    <div>
                        <label>
                            <input id={element.id} name={name} type="checkbox" value={element['@id']}
                                   onChange={
                                       (e) => {
                                           if (e.target.checked) {
                                               onCheck(e.target.value);
                                           } else {
                                               onDeCheck(e.target.value);
                                           }
                                       }
                                   }
                            />
                            {element.name}
                        </label>
                    </div>)}
            </label>
        </div>
    );

}

export default CheckedInputs;