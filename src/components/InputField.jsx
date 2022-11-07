import React from 'react';

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <label>
            <input
                value={text}
                onChange={event => handleInput(event.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
        </label>
    );
};

export default InputField;