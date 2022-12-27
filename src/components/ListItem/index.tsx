import { Draggable } from '@hello-pangea/dnd'
import React from 'react'
import Task from '../Task'
import { ContainerListItem } from './styles'

interface ListItemProps {
    id: number,
    index: number,
    content: string,
    isCompleted: boolean,
    toggleTaskCompletion: (idTask: number) => void
}

// const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
//     background: isDragging ? "#4a2975" : "white",
//     color: isDragging ? "white" : "black",
//     ...draggableStyle
// })

const ListItem = ({ id, index, content, isCompleted, toggleTaskCompletion }: ListItemProps) => {
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
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={provided.draggableProps.style}
                    >
                        <Task
                            key={id}
                            idTask={id}
                            content={content}
                            isCompleted={isCompleted}
                            toggleTaskCompletion={toggleTaskCompletion}
                        />
                    </ContainerListItem>
                )}
            </Draggable>
        </>
    )
}

export default ListItem