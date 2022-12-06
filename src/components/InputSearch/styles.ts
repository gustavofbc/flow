import styled from 'styled-components'

export const ContainerInputSearch = styled.label`
    width: 20rem;
    height: 3rem;
    
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    
    border-radius: 5px;
    border: 1px solid var(--black);
    background: var(--white);

    .inputSearch {
        height: 2rem;
        width: 100%;
        max-width: 17rem;
        padding: .5rem;
        
        border: none;
        border-right: 1px solid var(--black);
        color: var(--gray);
        background: transparent;
        font-size: .9rem;
        font-family: 'Inter', sans-serif;

        &::placeholder {
            color: var(--gray);
        }
    }

    .searchIcon {
        text-align: center;
        width: 2rem;
    }

`