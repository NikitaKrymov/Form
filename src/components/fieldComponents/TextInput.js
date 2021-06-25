import React from 'react';
import TextInput from '../../elements/formElements/TextInput';
import InputLabel from '../../elements/formElements/InputLabel';
import InputError from '../../elements/formElements/InputError';

const TextInputComponent = (props) => {
    const [error, setError] = React.useState('');
    const [value, setValue] = React.useState('');
    const handleBlur = () => {
        if (!value && props.required) {
            setError('Field cannot be empty');
        } else {
            props.onBlur(value);
            setError('');
        }
    }

    return(
        <div style={{ marginBottom: '2em' }}>
            <InputLabel data-testid="text_input-label">{props.required ? <div>{props.label} <label style={{ color: 'red' }}>*</label></div> : props.label }</InputLabel>
            <TextInput data-testid="text_input-input" disabled={props.disabled} placeholder="Text" error={error.length > 0 ? true : false } onChange={(e) => setValue(e.target.value)} onBlur={handleBlur}/>
            {error.length > 0 ? <InputError data-testid="text_input-error">{error}</InputError> : <></> }
        </div>
    );
}

export default TextInputComponent;