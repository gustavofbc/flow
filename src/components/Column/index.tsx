import { Droppable } from '@hello-pangea/dnd'
import React, { ReactNode, useState } from 'react'
import ListItem from '../ListItem'
import { ActionButton, ButtonRemove, ContainerColumn, FormColumn, InputTitleColumn, TitleColumn } from './styles'
import { FiEdit, FiSave, FiTrash } from 'react-icons/fi'
import InsertTask from '../InsertTask'

interface TaskProps {
    id: number,
    content: string,
    isCompleted: boolean,
    idColumn: number
}

interface ColumnProps {
    id: number,
    nameColumn: string,
    droppableId: string,
    isEditing: boolean,
    setIsEditing: (value: boolean) => void,
    editColumn: (idColumn: number, nameColumn: string) => void,
    deleteColumn: (idColumn: number) => void,
    taskList: Array<TaskProps>,
    setTasks: (list: Array<TaskProps>) => void,
    // newTaskTitle: string,
    // setNewTaskTitle: (nameColumn: string) => void,
    // children: ReactNode
    lastIdTask: number,
    setLastIdTask: (value: number) => void,
}

const Column = ({ id, nameColumn, taskList, setTasks, droppableId, isEditing, setIsEditing, editColumn, deleteColumn, lastIdTask, setLastIdTask }: ColumnProps) => {
    const [titleEditing, setTitleEditing] = useState(nameColumn);
    const [columnSelected, setColumnSelected] = useState(-1);

    const [newTaskTitle, setNewTaskTitle] = useState('');

    function resetValues() {
        setColumnSelected(0)
        handleSelectColumn();
        setIsEditing(false)
    }

    function verify(idColumn: number) {
        setColumnSelected(idColumn);
        handleSelectColumn();
    }

    async function handleSelectColumn() {
        setIsEditing(true);
        await editColumn(columnSelected, titleEditing);
    }

    function handleDeleteColumn(idColumn: number) {
        const response = confirm('Tem certeza de que deseja deletar esta lista?')
        if (response === true) {
            deleteColumn(idColumn);
            setIsEditing(false);
        }
        else {
            return
        }
    }

    //tasks
    function addNewTask(idColumn: number) {
        if (newTaskTitle != '') {
            const newTask = {
                id: lastIdTask + 1,
                content: newTaskTitle,
                isCompleted: false,
                idColumn: idColumn
            }

            const result = [...taskList, newTask]
            setTasks(result);
            setLastIdTask(newTask.id);
            setNewTaskTitle('');
        }
    }

    return (
        <Droppable
            key={id}
            droppableId={droppableId}
        >
            {(provided) => (
                <ContainerColumn>
                    <FormColumn onSubmit={(event) => (event.preventDefault())}>

                        {isEditing === true ?
                            <>
                                {columnSelected === id ?
                                    <>
                                        <ButtonRemove
                                            onClick={() => handleDeleteColumn(id)}
                                        >
                                            <FiTrash size={20} />
                                        </ButtonRemove>
                                        <InputTitleColumn
                                            value={titleEditing}
                                            onClick={() => verify(id)}
                                            onChange={(event) => setTitleEditing(event.target.value)}
                                        />

                                        <ActionButton
                                            className='save'
                                            onClick={() => resetValues()}
                                        >
                                            <FiSave size={24} />
                                        </ActionButton>
                                    </>
                                    :
                                    <>
                                        <ButtonRemove
                                            onClick={() => handleDeleteColumn(id)}
                                        >
                                            <FiTrash size={20} />
                                        </ButtonRemove>
                                        <TitleColumn disabled value={nameColumn} />
                                    </>
                                }
                            </>
                            :
                            <>
                                <TitleColumn
                                    value={titleEditing}
                                    onClick={() => verify(id)}
                                    onChange={(event) => setTitleEditing(event.target.value)}
                                />
                                <ActionButton
                                    className='edit'
                                    onClick={() => verify(id)}
                                >
                                    <FiEdit size={24} />
                                </ActionButton>
                            </>
                        }
                    </FormColumn>
                    <InsertTask
                        idColumn={id}
                        newTaskTitle={newTaskTitle}
                        setNewTaskTitle={setNewTaskTitle}
                        addNewTask={addNewTask}
                    />
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {(taskList.map((task, index) => {
                            if (task.idColumn === id) {
                                return (
                                    <ListItem
                                        id={task.id}
                                        content={task.content}
                                        index={index}
                                    />
                                )
                            }
                        }
                        ))}
                        {provided.placeholder}
                    </div>
                </ContainerColumn>
            )}

        </Droppable>
    )
}

export default Column