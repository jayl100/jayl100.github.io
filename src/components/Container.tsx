import styled from 'styled-components'

interface LayoutProps {
  children: React.ReactNode;
}

function Container({children}: LayoutProps) {
  return (
    <>
      <ContainerStyled>
        {children}
      </ContainerStyled>
    </>
  );

}

const ContainerStyled = styled.main`
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
    padding: 20px 0;
`

export default Container;