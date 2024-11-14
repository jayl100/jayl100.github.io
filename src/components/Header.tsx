import styled from 'styled-components'
import Container from "./Container.tsx";


function Header() {
  return (
    <HeaderStyled>
      <Container>
        <DivStyled>
          <LogoStyled>
            <h1>hyeon</h1>
          </LogoStyled>
          <UlStyled>
            <li>
              아이템
            </li>
            <li>
              "나"
            </li>
            <li>
              연락
            </li>
          </UlStyled>
        </DivStyled>
      </Container>
    </HeaderStyled>
  );
}
const DivStyled = styled.div`
    width: 1280px;
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
    
    font-size: 18px;
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