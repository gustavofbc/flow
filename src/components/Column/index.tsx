import { Droppable } from '@hello-pangea/dnd'
import React, { useState } from 'react'
import ListItem from '../ListItem'
import { ActionButton, ButtonRemove, ContainerColumn, FormColumn, InputTitleColumn, TitleColumn } from './styles'
import { FiEdit, FiSave, FiTrash } from 'react-icons/fi'

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
    deleteColumn: (idColumn: number) => void,
}

const Column = ({ idColumn, nameColumn, taskList, droppableId, isEditing, setIsEditing, handleEditColumn, deleteColumn }: ColumnProps) => {
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
                                        <ButtonRemove
                                            onClick={() => handleDeleteColumn(idColumn)}
                                        >
                                            <FiTrash size={20} />
                                        </ButtonRemove>
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
                                    <>
                                        <ButtonRemove
                                            onClick={() => handleDeleteColumn(idColumn)}
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