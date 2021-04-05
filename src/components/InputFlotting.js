import React from 'react';
import './InputFlotting.scss'

const InputFlotting = ({
    descLabel,
    type,
    placeholder,
    name,
    id,
    value,
    onClick,
    onChange
}) =>{

    return (
        <>
            <fieldset className="group--input--label--flotting">
                <legend className="label">{descLabel}</legend>
                <input type={type} placeholder={placeholder} name={name} id={id} onClick={onClick} onChange={onChange} value={value}/>
            </fieldset>
        </>
    )
}

export default InputFlotting