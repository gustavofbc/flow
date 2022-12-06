import { Draggable, Droppable } from '@hello-pangea/dnd'
import React from 'react'
import { ContainerColumn } from './styles'

interface TaskProps {
    id: string,
    content: string,
}

interface ColumnProps {
    idColumn: string,
    nameColumn: string,
    taskList: Array<TaskProps>,
    droppableId: string,
}

const Column = ({ idColumn, nameColumn, taskList, droppableId }: ColumnProps) => {
    return (
        <Droppable
            key={idColumn}
            droppableId={droppableId}
        >
            {(provided) => (
                <ContainerColumn>
                    <h1>{nameColumn}</h1>
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {(taskList.map(({ id, content }, index) => {
                            return (
                                <Draggable
                                    key={id}
                                    draggableId={id}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={provided.draggableProps.style}
                                        >
                                            {content}
                                        </div>
                                    )}
                                </Draggable>
                            )
                        }))}
                        {provided.placeholder}
                    </div>
                </ContainerColumn>
            )}

        </Droppable>
    )
}

export default Column