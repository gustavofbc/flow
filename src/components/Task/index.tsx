import React, { useState } from 'react'
import { ContainerTask, ContentTask, TaskTitle } from './styles'
import { FiCheck, FiTrash2, FiEdit, FiSave } from 'react-icons/fi'

interface TaskProps {
    idTask: number,
    content: string,
    idColumn: number,
    isCompleted: boolean,
    toggleTaskCompletion: (idTask: number) => void,
    deleteTask: (idTask: number, idColumn: number) => void,
    tasksCompleted: number,
    setTasksCompleted: (tasks: number) => void,
    editTask: (idTask: number, newContent: string) => void,
}

const Task = ({ idTask, content, idColumn, isCompleted, toggleTaskCompletion, deleteTask, tasksCompleted, setTasksCompleted, editTask }: TaskProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [contentTaskEditing, setContentTaskEditing] = useState(content);

    function verify(idTask: number, idColumn: number) {
        deleteTask(idTask, idColumn);
        if (isCompleted === true) {
            setTasksCompleted(tasksCompleted - 1);
        } else {
            return
        }
    }

    function handleEditTask(idTaskSelected: number, newContent: string) {
        if (newContent === "") {
            alert('O campo não pode ficar vazio, por favor verifique-o')
            return;
        }
        editTask(idTaskSelected, newContent);
        setIsEditing(false);
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
                {isEditing != true ?
                    <>
                        <TaskTitle>
                            {content}
                        </TaskTitle>
                        <FiEdit
                            size={24}
                            className='icon'
                            onClick={() => setIsEditing(true)}
                        />
                    </>
                    :
                    <>
                        <div className='content-edit'>
                            <input
                                className='input-edit'
                                onChange={(event) => setContentTaskEditing(event.target.value)}
                                value={contentTaskEditing}
                            />
                        </div>
                        <FiSave
                            size={24}
                            className='icon save'
                            onClick={() => handleEditTask(idTask, contentTaskEditing)}
                        />
                    </>
                }
                <FiTrash2
                    size={24}
                    className='icon delete'
                    onClick={() => verify(idTask, idColumn)}
                />
            </ContentTask>
        </ContainerTask>
    )
}

export default Task