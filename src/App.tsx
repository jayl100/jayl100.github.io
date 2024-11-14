import Container from "./components/Container.tsx";
import Main from "./pages/Main.tsx";
import Header from "./components/Header.tsx";
import {GlobalStyle} from "./style/global.ts";

function App() {

  return (
    <>
      <GlobalStyle />
        <Header/>
        <Container>
          <Main/>
        </Container>
    </>
  );
}

export default App
