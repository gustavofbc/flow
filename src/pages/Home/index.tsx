import React from 'react'
import Logo from '../../assets/logo.svg'
import Button from '../../components/Button'
import InputSearch from '../../components/InputSearch'
import { ContainerHome, ContainerLogo, ContentHome } from './styles'

const Home = () => {
    return (
        <ContainerHome>
            <ContainerLogo>
                <img src={Logo} alt="Flow logo" />
            </ContainerLogo>

            {/* <ContentHome>
                <InputSearch />
                <Button />
            </ContentHome> */}
        </ContainerHome>
    )
}

export default Home