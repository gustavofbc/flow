import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { ContainerInputSearch } from './styles'

const InputSearch = () => {
    return (
        <ContainerInputSearch htmlFor="">
            <input className='inputSearch' type="text" placeholder='Buscar tarefa' />
            <FiSearch className='searchIcon' />
        </ContainerInputSearch>
    )
}

export default InputSearch