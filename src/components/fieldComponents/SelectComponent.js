import React from 'react';
import InputLabel from '../../elements/formElements/InputLabel';
import { Select, Option } from '../../elements/formElements/SelectMenu';
import InputError from '../../elements/formElements/InputError';

const SelectComponent = (props) => {
    const [error, setError] = React.useState('');

    const handleBlur = (value) => {
        if (!value && props.required) {
            setError('Field can not be empty');
        } else {
            props.onChange(value);
            setError('');
        }
    }

    return (
        <div style={{ marginBottom: '2em' }}>
            <InputLabel>{props.required ? <div>{props.label} <label style={{ color: 'red' }}>*</label></div> : props.label }</InputLabel>
            <Select error={error.length > 0 ? true : false} onChange={(e) => handleBlur(e.target.value)}>
                <Option>
                    1
                </Option>
                <Option>
                    2
                </Option>
            </Select>
            {error.length > 0 ? <InputError>{error}</InputError> : <></> }
        </div>
    );
}

export default SelectComponent;