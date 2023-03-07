import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import AboutLogo from "../../assets/about-logo.png";

function About() {
  return (
    <>
      <Flex
        p="3rem 1.5rem"
        bg="#ffffff"
        borderRadius="0.4rem"
        wrap="wrap"
        justifyContent="center"
      >
        <Box>
          <Image
            boxSize="250px"
            src={AboutLogo}
            alt="profile-picture"
            borderRadius="full"
          />
        </Box>
        <Box m={"1rem"} flex={1}>
          <Heading as="h2" size="2xl" color="#2ecc71" mb="1rem">
            Sobre mi
          </Heading>

          <Text fontSize="xl">
            Soy un Desarrollador Web Fullstack. Comencé a mediados del 2021 en
            el mundo de la programación por recomendación de un amigo y me
            impulso mi curiosidad por saber como se conformaba una página web.
            Mis primeros pasos fueron instruirme por mi cuenta con videos, pero
            poco después comencé a estudiar en un Bootcamp. Mi objetivo
            principal es seguir desarrollándome como programador, aprendiendo
            nuevas tecnologías y perfeccionar el flujo de trabajar en equipo.
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default About;
