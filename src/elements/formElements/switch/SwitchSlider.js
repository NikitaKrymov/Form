import styled from 'styled-components';

export default styled.div`
    position: absolute;
    cursor:pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.checked ? '#3B4256' : '#E2E7ED'};
    background-color: ${props => props.disabled ? props.checked ? '#B8BCCA' : '#E2E7ED' : ''};
    transition: 0.4s;
    border-radius: 1em;
    :before {
        position: absolute;
        content: "";
        height: 1.35em;
        width: 1.4em;
        top: 0.05em;
        left: 0.05em;
        border-radius: 50%;
        background-color: white;
        transition: 0.3s;
        transform: ${props => props.checked ? 'translateX(1.5em)' : ''};
    }
`