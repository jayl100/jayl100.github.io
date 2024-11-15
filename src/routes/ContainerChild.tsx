// routes.tsx 또는 routes.js
import Main from "../pages/Main";
import Container from "../components/Container";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import About from "../pages/About";

export const ContainerChild = [
  {
    path: '/',
    element: (
      <Container>
        <Main />
      </Container>
    ),
  },
  {
    path: '/project',
    element: (
      <Container>
        <Project />
      </Container>
    ),
  },
  {
    path: '/about',
    element: (
      <Container>
        <About />
      </Container>
    ),
  },
  {
    path: '/contact',
    element: (
      <Container>
        <Contact />
      </Container>
    ),
  },
];
