import React from 'react';
import Checkbox from '../../elements/formElements/Checkbox';
import CheckBoxLabel from '../../elements/formElements/CheckBoxLabel';
import InputLabel from '../../elements/formElements/InputLabel';

const CheckboxComponent = (props) => {
    return (
        <div style={{ marginBottom: '2em' }}>
            <InputLabel>{props.required ? <div>{props.label} <label style={{ color: 'red' }}>*</label></div> : props.label}</InputLabel>
            {props.list.map((box, i) => {
                return (
                    <div key={i} style={{ display: 'flex', marginTop: '1em', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Checkbox disabled={box.disabled} name={box.name} value={box.value} onChange={(e) => props.onChange(e.target.checked, e.target.value)} />
                        <CheckBoxLabel htmlFor={box.name}>
                            {box.value}
                        </CheckBoxLabel>
                    </div>
                );
            })}
        </div>
    );
}

export default CheckboxComponent;