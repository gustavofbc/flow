import { Droppable } from '@hello-pangea/dnd'
import React, { useState } from 'react'
import ListItem from '../ListItem'
import { ActionButton, ButtonRemove, ContainerColumn, FormColumn, InputTitleColumn, Notify, TitleColumn } from './styles'
import { FiEdit, FiSave, FiTrash } from 'react-icons/fi'
import InsertTask from '../InsertTask'

interface TaskProps {
    id: number,
    content: string,
    isCompleted: boolean,
    idColumn: number
}

interface Column {
    id: number,
    name: string,
    listTasks: TaskProps[],
}

interface ColumnProps {
    id: number,
    nameColumn: string,
    droppableId: string,
    isEditing: boolean,
    setIsEditing: (value: boolean) => void,
    editColumn: (idColumn: number, nameColumn: string) => void,
    deleteColumn: (idColumn: number) => void,
    lastIdTask: number,
    setLastIdTask: (value: number) => void,
    addTaskInColumn: (idColumn: number, newTask: TaskProps) => void,
    tasks: Array<TaskProps>
    deleteTask: (idTask: number, idColumn: number) => void,

}

const Column = ({ id, nameColumn, isEditing, setIsEditing, editColumn, deleteColumn, lastIdTask, setLastIdTask, addTaskInColumn, tasks, deleteTask }: ColumnProps) => {
    const [titleEditing, setTitleEditing] = useState(nameColumn);
    const [columnSelected, setColumnSelected] = useState(-1);

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [tasksOfColumn, setTasksOfColumn] = useState(tasks);
    const [tasksCompleted, setTasksCompleted] = useState(0);

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
            addTaskInColumn(idColumn, newTask);
            setLastIdTask(newTask.id);
            setNewTaskTitle('');
        }
    }

    function toggleTaskCompletion(idTask: number) {
        const tasksArray = [...tasks]

        for (var i in tasksArray) {
            if (tasksArray[i].id === idTask) {
                tasksArray[i].isCompleted = !tasksArray[i].isCompleted
                if (tasksArray[i].isCompleted === true) {
                    setTasksCompleted(tasksCompleted + 1)
                } else {
                    setTasksCompleted(tasksCompleted - 1)
                }
            }
        }
        setTasksOfColumn(tasksArray);
    }

    function editTask(idTask: number, newContentTask: string) {
        const tasksArray = [...tasks]

        for (var i in tasksArray) {
            if (tasksArray[i].id === idTask) {
                tasksArray[i].content = newContentTask
            }
        }
        setTasksOfColumn(tasksArray);
    }


    return (
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
            <Droppable
                key={id}
                droppableId={String(id)}
            >
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {tasks.length === 0 ?
                            <Notify>
                                Arraste/solte suas tarefas aqui...
                            </Notify>
                            :
                            <>
                                {
                                    (tasks.map((task, index) => {
                                        return (
                                            <ListItem
                                                key={task.id}
                                                id={task.id}
                                                content={task.content}
                                                index={index}
                                                isCompleted={task.isCompleted}
                                                idColumn={task.idColumn}
                                                toggleTaskCompletion={toggleTaskCompletion}
                                                deleteTask={deleteTask}
                                                tasksCompleted={tasksCompleted}
                                                setTasksCompleted={setTasksCompleted}
                                                editTask={editTask}
                                            />
                                        )

                                    }
                                    ))
                                }
                                <Notify>
                                    {`${tasksCompleted} de ${tasks.length}  tarefas conclu??das`}
                                </Notify>
                            </>
                        }

                        {provided.placeholder}
                    </div>
                )}

            </Droppable>
        </ContainerColumn>
    )
}

export default Column