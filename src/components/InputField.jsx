import React from 'react';

const InputField = ({value, updateText, handleAction}) => {

    return (
        <label>
            <input
                value={value}
                placeholder={'Enter a title'}
                onChange={event => updateText(event.target.value)}
            />
            <button onClick={handleAction}>Add</button>
        </label>
    );
};

export default InputField;