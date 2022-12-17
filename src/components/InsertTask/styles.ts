import styled from 'styled-components';

export const ContainerInsertTask = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 3.2rem;
    background: var(--gray);
    border: 2px solid var(--black);

    padding: .5rem;
    margin: 1rem .25rem;
    border-radius: .5rem;
    cursor: pointer;

    transition: border .3s;

    .insert {
        width: 100%;
        height: 2rem;
        
        padding: .5rem;
        margin-right: 10px;
        border: none;
        border-right: 2px solid var(--black);
        color: var(--white);
        background: transparent;
        font-size: 1rem;
        font-family: 'Inter', sans-serif;

        &::placeholder {
            color: var(--white);
        }
    }

    .iconAddTask {
        color: var(--white);
        transition: .3s;

        &:hover {
            color: var(--green);
        }
    }
`

export const FormInsertTask = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: .8;
    transition: .3s;

    &:hover {
        opacity: 1;
    }

`