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

    .icon {
        display: flex;
        align-self: start;
        width: 48px;
        color: var(--gray);
        padding: 0 5px;
        
        cursor: pointer;
        pointer-events: auto;
        transition: .3s;

        &:hover {
            color: var(--white);
        }
    }

    .save {

        &:hover {
            color: var(--green);
        }
    }

    .delete {
        border-left: 2px solid var(--gray);
    }

    .content-edit {
        min-height: 1.5rem;
        width: calc(100% - 40px);
        
        margin-left: 10px;
        padding-right: 10px;
        border-right: 2px solid var(--gray);
    }
    
    .input-edit {
        width: 100%;
        color: var(--white);
        background: transparent;

        font-size: 1rem;
        font-family: 'Inter';
        border: none;
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
    min-height: 24px;
    margin-left: 10px;
    padding-right: 10px;
    border-right: 2px solid var(--gray);
`
