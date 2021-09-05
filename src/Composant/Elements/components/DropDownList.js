import React from 'react';

export default function({list, label, firstItemLabel, index, onChange}) {

    return (
        <div className="dropdownlist">
            <label>
                <div>{label}</div>
            <select name="dropdown" defaultValue={index}
                    onChange=
                        {(e) => onChange(e.target.value)}>

            <option key={0} disabled>select</option>
                {list.map(
                    (element) => <option key={element.id}
                                          value={element['@id']}
                    >
                        {element.name}
                    </option>)}
            </select>
            </label>
        </div>
    );

}