import { Droppable } from '@hello-pangea/dnd'
import React from 'react'
import ListItem from '../ListItem'
import { ContainerColumn, TitleColumn } from './styles'

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
                    <TitleColumn>{nameColumn}</TitleColumn>
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {(taskList.map(({ id, content }, index) => {
                            return (
                                <ListItem
                                    id={id}
                                    content={content}
                                    index={index}
                                />
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