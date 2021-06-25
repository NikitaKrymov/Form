import React from 'react';
import InputLabel from '../../elements/formElements/InputLabel';
import SwitchInput from '../../elements/formElements/switch/SwitchInput';
import SwitchContianer from '../../elements/formElements/switch/SwitchContianer';
import SwitchSlider from '../../elements/formElements/switch/SwitchSlider';

const SwitchComponent = (props) => {
    return(
        <div style={{ marginBottom: '2em' }}>
            <InputLabel>{props.required ? <div>{props.label} <label style={{ color: 'red' }}>*</label></div> : props.label }</InputLabel>
            <SwitchContianer data-testid="switch-toggle" onClick={() => props.disabled ? null : props.onChange(!props.value)}>
                <SwitchInput />
                <SwitchSlider disabled={props.disabled} data-testid="switch-slider" checked={props.value ? true : false} ></SwitchSlider>
            </SwitchContianer>
        </div>
    );
}

export default SwitchComponent;