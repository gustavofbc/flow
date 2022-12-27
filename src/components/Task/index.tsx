import React from 'react'
import { ContainerTask, TaskTitle } from './styles'
import { FiCheck } from 'react-icons/fi'

interface TaskProps {
    idTask: number,
    content: string,
    isCompleted: boolean,
    toggleTaskCompletion: (idTask: number) => void
}

const Task = ({ idTask, content, isCompleted, toggleTaskCompletion }: TaskProps) => {
    return (
        <ContainerTask>
            {isCompleted != true ?
                <input
                    type="checkbox"
                    className='checked-input'
                    checked={isCompleted}
                    onChange={() => toggleTaskCompletion(idTask)}
                />
                :
                <FiCheck
                    className='checked-icon'
                    onClick={() => toggleTaskCompletion(idTask)}
                />
            }
            <TaskTitle>
                {content}
            </TaskTitle>
        </ContainerTask>
    )
}

export default Task