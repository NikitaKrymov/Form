import styled from 'styled-components';

export default styled.input.attrs({ type: 'radio' })`
    padding: 0;
    margin: 0;
    width: 0.5em;
    height: 0.5em;
    appearance: none;
    :hover {
        cursor: pointer;
    }
    :checked{
        background-color: ${props => props.disabled ? '#B8BCCA' : '#3B4256'};
        border-radius: 50%;
        width: 0.6em;
        height:0.6em;
    }
`