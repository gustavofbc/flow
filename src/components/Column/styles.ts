import styled from 'styled-components';

export const ContainerColumn = styled.div`
    width: 100%;
    max-width: 375px;
    background: var(--white);

    margin: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    border: 2px solid var(--black);
`

export const FormColumn = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 100%;
`

export const InputTitleColumn = styled.textarea`
    border: 1px solid var(--black);
    border-radius: .5rem;
    background: transparent;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: 'Jura', sans-serif;
    padding: .5rem;
    resize: none;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 10px var(--black);
        border: 1px solid var(--black);
        border-radius: 4px;
    }
 
    &::-webkit-scrollbar-thumb {
        background: var(--green);
        border: 1px solid var(--black);
        border-radius: 10px;
    }

`

export const TitleColumn = styled.textarea`
    min-height: 70px;
    padding: .5rem;
    border: none;
    background: transparent;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: 'Jura', sans-serif;
    resize: none;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 10px var(--black);
        border: 1px solid var(--black);
        border-radius: 4px;
    }
 
    &::-webkit-scrollbar-thumb {
        background: var(--green);
        border: 1px solid var(--black);
        border-radius: 10px;
    }

`

export const ActionButton = styled.button`
    width: 2.6rem;
    height: 2.6rem;
    border: none;
    border-radius: .35rem;
    opacity: .8;
    transition: .3s;
    
    &:hover {
        opacity: 1;
    }

    &.edit {
        background: var(--black);
        color: var(--gray);
    }

    &.save {
        background: var(--green);
        color: var(--black);  
    }
`