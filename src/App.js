import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Header />
      <Container>
        <About />
        <Skills />
        {/* <Projects /> */}
        <Experience />
      </Container>
    </>
  );
}

export default App;
