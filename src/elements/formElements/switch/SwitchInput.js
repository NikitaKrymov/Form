import styled from 'styled-components';

export default styled.input.attrs({ type: 'checkbox' })`
    display: none;
    :checked {
        background-color: #3B4256;
    }
`