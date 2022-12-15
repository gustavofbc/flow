import styled from 'styled-components';

export const ContainerInsertColumn = styled.label`
    height: 3.4rem;
    width: 100%;
    max-width: 375px;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    color: var(--white);
    background: var(--black);

    margin: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    border: 2px solid var(--black);
    opacity: .9;
    transition: opacity .3s;

    .inputTitleColumn {
        height: 2rem;
        width: 100%;
        
        padding: .5rem;
        margin-right: 10px;
        border: none;
        border-right: 1px solid var(--gray);
        color: var(--white);
        background: transparent;
        font-size: 1.1rem;
        font-family: 'Inter', sans-serif;
        transition: .3s;

        &::placeholder {
            color: var(--gray);
        }

    }

    .iconAdd {
        cursor: pointer;

        &:hover {
            color: var(--green);
        }
    }

    &:hover {
        opacity: 1;
    }

`

export const InputTitleColumn = styled.input`
    border: none;
    height: 100%;
`