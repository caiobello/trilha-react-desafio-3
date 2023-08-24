import { useNavigate  } from "react-router-dom";

import React from 'react'
import logo from '../../assets/logo-dio.png';



import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

const Header = ({autenticado}) => {
  const navigate = useNavigate();

  const handleClickRegister = () => {
      navigate('/register')
  }

  const handleClickSignIn = () => {
    navigate('/login')
}
  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <MenuRight href="/register" onClick={handleClickRegister}>Cadastrar</MenuRight>
                <MenuRight href="/login" onClick={handleClickSignIn}>Entrar</MenuRight>

              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
