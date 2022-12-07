import styled from 'styled-components'

export const ContainerListItem = styled.div`
    
    height: 100%;
    min-height: 3.2rem;
    color: var(--white);
    background: var(--black);
    border: 2px solid var(--black);

    padding: .5rem;
    margin: 1rem .25rem;
    border-radius: .5rem;
    cursor: pointer;

    transition: border .3s;

    &:hover {
        border: 2px solid var(--green);
    }
`
