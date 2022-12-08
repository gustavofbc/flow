import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { ContainerInsertColumn } from './styles'

interface ColumnProps {
    nameColumn: string,
}

const InsertColumn = ({ nameColumn }: ColumnProps) => {
    return (

        <ContainerInsertColumn>
            <input
                type="text"
                className='inputTitleColumn'
                placeholder='Adicionar uma nova lista'
            />
            <FiPlus size={26} color={'gray'} />
        </ContainerInsertColumn>

    )
}

export default InsertColumn