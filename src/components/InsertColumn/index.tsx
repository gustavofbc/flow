import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { ContainerInsertColumn } from './styles'

// interface TaskProps {
//     id: number
//     content: string
//     isCompleted: boolean
// }

// interface ColumnProps {
//     id: number,
//     name: string,
//     listTasks: Array<TaskProps>
// }

interface InsertColumnProps {
    nameColumn: string,
    // columnState: ColumnProps,
    addColumn: (title: string) => void,
    setNewColumnTitle: (title: string) => void
}

const InsertColumn = ({ nameColumn, addColumn, setNewColumnTitle }: InsertColumnProps) => {
    return (

        <form onSubmit={() => addColumn(nameColumn)}>
            <ContainerInsertColumn>

                <input
                    value={nameColumn}
                    onChange={(event) => setNewColumnTitle(event.target.value)}
                    type="text"
                    className='inputTitleColumn'
                    placeholder='Adicionar uma nova lista'
                />
                <FiPlus size={26} color={'gray'} />
            </ContainerInsertColumn>
        </form>

    )
}

export default InsertColumn