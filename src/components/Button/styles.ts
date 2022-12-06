import styled from 'styled-components'

export const ButtonContainer = styled.button`
    border: none;
    border-radius: 5px;
    width: 3.2rem;
    height: 3.2rem;
    background: var(--green);
    color: var(--black);
    border: 2px solid var(--green);
    transition: .3s;
    
    &:hover {
        background: var(--green-light);
        border: 2px solid var(--green-light);
    }
`