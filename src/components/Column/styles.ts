import styled from 'styled-components';

export const ContainerColumn = styled.div`
    position: relative;
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
    border: 1px solid transparent;
    border-radius: .5rem;
    padding: .5rem;
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

export const ButtonRemove = styled.button`
    position: absolute;
    top: -20px;
    left: -20px;

    width: 2.6rem;
    height: 2.6rem;
    border: 2px solid var(--black);
    border-radius: 50%;
    color: var(--black);
    background: var(--background);
    transition: .3s;

    &:hover {
        color: #E83F5B;
        border: 2px solid #E83F5B;
    } 
`