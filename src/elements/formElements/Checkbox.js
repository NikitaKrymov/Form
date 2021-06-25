import styled from 'styled-components';

export default styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    height: 1.2em;
    width: 1.2em;
    padding: 0;
    background-color: white;
    border: 1px solid #3B4256;
    border-radius: 2px;
    :hover{
        cursor: pointer;
    }
    :checked {
        background-color: ${props => props.disabled ? '#B8BCCA' : '#3B4256'};
    };
    :after{
        font-family: 'Font Awesome 5 Free';
        font-weight: 800;
        color: white;
        content: "\f00c";
    }
    border: ${props => props.disabled ? '1px solid #B8BCCA' : '1px solid 1px solid rgb(255,255,255,0)'};
`