import React, { useState } from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { ContainerInsertTask, FormInsertTask } from './styles'

interface InsertTaskProps {
    idColumn: number,
    newTaskTitle: string,
    setNewTaskTitle: (title: string) => void,
    addNewTask: (idColumn: number) => void,
}

const InsertTask = ({ idColumn, newTaskTitle, setNewTaskTitle, addNewTask }: InsertTaskProps) => {

    function HandleCreateNewTask() {
        event?.preventDefault();
        addNewTask(idColumn);
    }

    return (

        <ContainerInsertTask>
            <FormInsertTask onSubmit={() => HandleCreateNewTask()}>

                <input
                    value={newTaskTitle}
                    onChange={(event) => setNewTaskTitle(event.target.value)}
                    type="text"
                    className='insert'
                    placeholder='Adicionar uma nova tarefa'
                />
                <FiCheckSquare
                    size={26}
                    onClick={() => HandleCreateNewTask()}
                    className='iconAddTask'
                />
            </FormInsertTask>
        </ContainerInsertTask>

    )
}

export default InsertTask