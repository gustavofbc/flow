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

    transition: all .3s;

    &.completed {
        color: var(--black);
        background: var(--green);
        text-decoration: line-through;
    }

    &:hover {
        border: 2px solid var(--green);
    }

`
