import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import HHHimg from "../../assets/Happy-Hour-Helper-img.png";
import CardCUI from "./card/Card";

function Projects({ projectsRef }) {
  return (
    <>
      <Box ref={projectsRef} m="3rem 0" bg="#ffffff" borderRadius="0.4rem">
        <Heading
          as="h2"
          size="2xl"
          color="#2ecc71"
          mb="1rem"
          textAlign="center"
        >
          Proyectos
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Estos son algunos de los proyectos en los que estuve trabajando, ya
          sea individualmente como grupal.
        </Text>

        <Flex
          p="3rem 1rem"
          bg="#ecf0f1"
          wrap="wrap"
          borderRadius="0 0 0.4rem 0.4rem"
          gap={10}
          justifyContent="center"
        >
          <CardCUI
            name="Happy Hour Helper"
            img={HHHimg}
            tag="E-Commerce"
            link="https://happy-hour-helper.vercel.app"
          />
        </Flex>
      </Box>
    </>
  );
}

export default Projects;
