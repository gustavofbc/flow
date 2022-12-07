import { Draggable } from '@hello-pangea/dnd'
import React from 'react'
import Task from '../Task'
import { ContainerListItem } from './styles'

interface ListItemProps {
    id: string,
    index: number,
    content: string,
}

// const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
//     background: isDragging ? "#4a2975" : "white",
//     color: isDragging ? "white" : "black",
//     ...draggableStyle
// })

const ListItem = ({ id, index, content }: ListItemProps) => {
    return (
        <>
            <Draggable
                key={id}
                draggableId={id}
                index={index}
            >
                {(provided) => (
                    <ContainerListItem className='item'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={provided.draggableProps.style}
                    >
                        <Task
                            key={id}
                            content={content}
                        />
                        {/* <TaskContainer>
                            <input
                                type="checkbox"
                            />
                            <TaskTitle>
                                {content}
                            </TaskTitle>
                        </TaskContainer> */}
                    </ContainerListItem>
                )}
            </Draggable>
        </>
    )
}

export default ListItem