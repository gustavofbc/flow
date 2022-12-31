import React from 'react'
import { ContainerTask, ContentTask, TaskTitle } from './styles'
import { FiCheck, FiTrash2 } from 'react-icons/fi'

interface TaskProps {
    idTask: number,
    content: string,
    idColumn: number,
    isCompleted: boolean,
    toggleTaskCompletion: (idTask: number) => void,
    deleteTask: (idTask: number, idColumn: number) => void,
    tasksCompleted: number,
    setTasksCompleted: (tasks: number) => void,
}

const Task = ({ idTask, content, idColumn, isCompleted, toggleTaskCompletion, deleteTask, tasksCompleted, setTasksCompleted }: TaskProps) => {
    function verify(idTask: number, idColumn: number) {
        deleteTask(idTask, idColumn);
        if (isCompleted === true) {
            setTasksCompleted(tasksCompleted - 1);
        } else {
            return
        }
    }

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
            <ContentTask>
                <TaskTitle>
                    {content}
                </TaskTitle>
                <FiTrash2
                    size={24}
                    className='delete-icon'
                    onClick={() => verify(idTask, idColumn)}
                />
            </ContentTask>
        </ContainerTask>
    )
}

export default Task