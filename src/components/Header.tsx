import styled from 'styled-components'
import {ContainerStyled} from "./Container.tsx";
import Logo from '../assets/HYEON_logo_colour.svg'
import {Link} from "react-router-dom";

function Header() {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <DivStyled>
          <LogoStyled>
            <h1>
              <Link to='/'>
                <img src={Logo} alt="logo"/>
              </Link>
            </h1>
          </LogoStyled>
          <UlStyled>
            <Link to='/project'><p>프로젝트</p></Link>
            <Link to='/about'><p>"나"</p></Link>
            <Link to='/contact'><p>연락</p></Link>
          </UlStyled>
        </DivStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
}
const DivStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LogoStyled = styled.div`

`

const UlStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 48px;

    font-size: 1rem;
    font-weight: bold;
    list-style: none;

`

const HeaderStyled = styled.header`
    height: 80px;
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    
    border-bottom: 1px solid #d9d9d9;
`


export default Header;