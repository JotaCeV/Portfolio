import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { useRef } from "react";
import Header from "./components/header/header";
import "./App.css";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/project-section/projects";
import Contact from "./components/contact/contact";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="app-container">
      <Header
        ref1={aboutRef}
        ref2={skillsRef}
        ref3={projectRef}
        ref4={contactRef}
      />
      <section className="home-container">
        <ChakraProvider>
          <Box w="80vw" m="0 auto" p="3rem 0">
            <About id="about" aboutRef={aboutRef} />

            <Skills id="skills" skillsRef={skillsRef} />

            <Projects id="projects" projectsRef={projectRef} />

            <Contact contactRef={contactRef} />
          </Box>
        </ChakraProvider>
      </section>
    </div>
  );
}

export default App;
