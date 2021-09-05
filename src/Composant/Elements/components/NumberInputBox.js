import React from 'react';
export function NumberInputBox({label, value, max, onChange}) {
    return(
        <div className="inputbox">
            <label>
                <div>{label}</div>
                <input name={label} type='number' value={value} max={max}
                       onChange={(e) => onChange(parseInt(e.target.value))} />
            </label>
        </div>
    );
}