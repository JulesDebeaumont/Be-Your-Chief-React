import PropTypes from 'prop-types';
import React from 'react';
export function TextInputBox({label, value, onChange}) {
    return(
        <div className="inputbox">
            <label>
                <div>{label}</div>
                <input name={label} type='text' value={value}
                       onChange={(e) => onChange(e.target.value)} />
            </label>
        </div>
    );
}

TextInputBox.prototype = {
    label: PropTypes.string,
    value: PropTypes.node,
    onChange: PropTypes.func,
    required: PropTypes.bool,
}

export default TextInputBox;