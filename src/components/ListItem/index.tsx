import { Draggable } from '@hello-pangea/dnd'
import React from 'react'
import Task from '../Task'
import { ContainerListItem } from './styles'

interface ListItemProps {
    id: number,
    index: number,
    content: string,
    idColumn: number,
    isCompleted: boolean,
    toggleTaskCompletion: (idTask: number) => void,
    deleteTask: (idTask: number, idColumn: number) => void,
    tasksCompleted: number,
    setTasksCompleted: (tasks: number) => void,
}

// const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
//     background: isDragging ? "#4a2975" : "white",
//     color: isDragging ? "white" : "black",
//     ...draggableStyle
// })

const ListItem = ({ id, index, content, idColumn, isCompleted, toggleTaskCompletion, deleteTask, tasksCompleted, setTasksCompleted }: ListItemProps) => {
    return (
        <>
            <Draggable
                key={id}
                draggableId={id.toString()}
                index={index}
            >
                {(provided) => (
                    <ContainerListItem
                        className={isCompleted === true ? 'completed' : ''}
                        ref={provided.innerRef}
                        {...isCompleted === true ? '' : { ...provided.draggableProps }}
                        {...provided.dragHandleProps}
                        // { ...isCompleted === true ? '' : {...provided.dragHandleProps}}
                        style={isCompleted === true ? { transition: 'none', transform: 'none' } : provided.draggableProps.style}
                    >
                        <Task
                            key={id}
                            idTask={id}
                            content={content}
                            idColumn={idColumn}
                            isCompleted={isCompleted}
                            toggleTaskCompletion={toggleTaskCompletion}
                            deleteTask={deleteTask}
                            tasksCompleted={tasksCompleted}
                            setTasksCompleted={setTasksCompleted}
                        />
                    </ContainerListItem>
                )}
            </Draggable>
        </>
    )
}

export default ListItem