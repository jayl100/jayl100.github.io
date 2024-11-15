import styled from 'styled-components'
import Header from "./Header.tsx";

interface Props {
  children: React.ReactNode;
}

function Container({children}: Props) {
  return (
    <>
      <Header />
      <ContainerStyled>
        <SectionStyled>
        {children}
        </SectionStyled>
      </ContainerStyled>
    </>
  );

}

export const ContainerStyled = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 80px;
`

const SectionStyled = styled.section`
    margin-top: 80px;
`

export default Container;