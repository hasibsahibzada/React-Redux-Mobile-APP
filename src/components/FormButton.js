import React from 'react';

const FormButton = (props) => {
    const { label } = props;
    return (
        <button> {label} </button>
    );
}

export default FormButton;