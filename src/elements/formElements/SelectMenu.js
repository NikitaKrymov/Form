import styled from 'styled-components';

export const Select = styled.select`
    height: 3em;
    margin-top: 0.2em;
    //appearance: none;
    width: 100%;
    padding-left: 0.5em;
    background-color: #F8FAFC;
    border-radius: 4px;
    border: none;
    font-size: 1em;
    outline: none;
    border: ${props => props.error ? '1px solid #ED0131' : '1px solid rgb(255,255,255,0)' };
    color: #B8BCCA;
`

export const Option = styled.option`
    height: 20em;
    border: 2px solid red;
`