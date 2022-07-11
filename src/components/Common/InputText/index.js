import React from 'react'
import "./style.css"

export default function InputText(props) {


    const border = props.required ? "" : "invalid"
    const label = props.required ? "" : "invalidlabel"
    const placeholder = props.required ? "" : "invalidtext"
    return (
        <>
            <fieldset className={border}>
                <legend className={label}>{props.title}</legend>

                <input onChange={props.onChange} className={`allInputs ${placeholder}`} type="text" placeholder={props.placeholder} />
            </fieldset>
        </>
    );

}
