import React from 'react'
import "./style.css"
import { useRef } from "react";

const InputText = React.forwardRef((props, ref) => {


    const border = props.required ? "" : "invalid"
    const label = props.required ? "" : "invalidlabel"
    const placeholder = props.required ? "" : "invalidtext"
    return (
        <>
            <fieldset className={border}>
                <legend className={label}>{props.title}</legend>

                <input ref={ref} onChange={props.onChange} className={`allInputs ${placeholder}`} type="text" placeholder={props.placeholder} />

            </fieldset>
        </>
    );

}
)
export default InputText;