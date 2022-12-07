import React from 'react'
import { ContainerTask, TaskTitle } from './styles'

interface TaskProps {
    content: string
}

const Task = ({ content }: TaskProps) => {
    return (
        <ContainerTask>
            <input
                type="checkbox"
            />
            <TaskTitle>
                {content}
            </TaskTitle>
        </ContainerTask>
    )
}

export default Task