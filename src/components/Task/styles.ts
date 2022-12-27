import styled from 'styled-components'

export const ContainerTask = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    word-break: break-all;

    .checked-input {
        all: unset;
        width: 18px;
        height: 18px;
        border-radius: .35rem;
        border: 2px solid var(--gray);
        background: var(--background);
    }

    .checked-icon {
        width: 20px;
        height: 20px;
        border-radius: .35rem;
        border: 1px solid var(--black);
        color: var(--green);
        background: var(--black);
    }
`

export const TaskTitle = styled.p`
    margin-left: 5px;
`
