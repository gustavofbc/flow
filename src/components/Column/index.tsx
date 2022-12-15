import { Droppable } from '@hello-pangea/dnd'
import React, { useState } from 'react'
import ListItem from '../ListItem'
import { ActionButton, ContainerColumn, FormColumn, InputTitleColumn, TitleColumn } from './styles'
import { FiEdit, FiSave } from 'react-icons/fi'

interface TaskProps {
    id: string,
    content: string,
}

interface ColumnProps {
    idColumn: number,
    nameColumn: string,
    taskList: Array<TaskProps>,
    droppableId: string,
    setIsEditing: (value: boolean) => void,
    isEditing: boolean,
    handleEditColumn: (idColumn: number, nameColumn: string) => void,
}

const Column = ({ idColumn, nameColumn, taskList, droppableId, isEditing, setIsEditing, handleEditColumn }: ColumnProps) => {
    const [titleEditing, setTitleEditing] = useState(nameColumn);
    const [columnSelected, setColumnSelected] = useState(0);

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
        await handleEditColumn(columnSelected, titleEditing);
    }

    return (
        <Droppable
            key={idColumn}
            droppableId={droppableId}
        >
            {(provided) => (
                <ContainerColumn>
                    <FormColumn onSubmit={(event) => (event.preventDefault())}>

                        {isEditing === true ?
                            <>
                                {columnSelected === idColumn ?
                                    <>
                                        <InputTitleColumn
                                            value={titleEditing}
                                            onClick={() => verify(idColumn)}
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
                                    <TitleColumn disabled value={nameColumn} />
                                }
                            </>
                            :
                            <>
                                <TitleColumn
                                    value={titleEditing}
                                    onClick={() => verify(idColumn)}
                                    onChange={(event) => setTitleEditing(event.target.value)}
                                />
                                <ActionButton
                                    className='edit'
                                    onClick={() => verify(idColumn)}
                                >
                                    <FiEdit size={24} />
                                </ActionButton>
                            </>
                        }
                    </FormColumn>
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