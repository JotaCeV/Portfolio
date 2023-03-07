import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import About from "../about/about";
import Skills from "../skills/skills";
import Projects from "../project-section/projects";

function Home() {
  return (
    <>
      <Box w="80vw" m="0 auto" p="3rem 0">
        <About />

        <Divider />

        <Skills />

        <Divider />

        <Projects />
      </Box>
    </>
  );
}

export default Home;
