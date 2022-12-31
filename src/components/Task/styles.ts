import styled from 'styled-components'

export const ContainerTask = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    word-break: break-all;

    .checked-input {
        all: unset;
        display: flex;
        align-self: start;
        width: 20px;
        height: 20px;
        border-radius: .35rem;
        border: 2px solid var(--gray);
        background: var(--background);
        
        cursor: pointer;
        pointer-events: auto;
    }

    .checked-icon {
        display: flex;
        align-self: start;
        width: 24px;
        height: 24px;
        border-radius: .35rem;
        border: 1px solid var(--black);
        color: var(--green);
        background: var(--black);
        
        cursor: pointer;
        pointer-events: auto;
    }

    .delete-icon {
        display: flex;
        align-self: start;
        width: 40px;
        color: var(--gray);
        padding-left: 5px;
        
        cursor: pointer;
        pointer-events: auto;
        transition: .3s;

        &:hover {
            color: var(--white);
        }
    }
`

export const ContentTask = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
`

export const TaskTitle = styled.p`
    width: calc(100% - 40px);
    margin-left: 10px;
    padding-right: 10px;
    border-right: 2px solid var(--gray);
`
