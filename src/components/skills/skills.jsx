import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Skills({ skillsRef }) {
  const styleLogo = {
    margin: "0 auto",
    transition: "all 0.2s",
    _hover: { transform: "scale(1.2)" },
  };
  return (
    <>
      <Box
        m="3rem 0"
        bg="#ffffff"
        p="2rem 0.5rem"
        borderRadius="0.4rem"
        ref={skillsRef}
      >
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          color="#2ecc71"
          mb="1rem"
        >
          Skills
        </Heading>
        <Heading
          as="h3"
          size="lg"
          fontSize="2xl"
          textAlign="center"
          mb={"1rem"}
        >
          Tech Skills
        </Heading>
        <Grid
          templateColumns="repeat(5, 0.5fr)"
          templateRows="repeat(2, 1fr)"
          gap={"2rem 1rem"}
          border="2px solid #ecf0f1"
          p={4}
          borderRadius="1rem"
          w="80%"
          m="0 auto"
        >
          <GridItem sx={styleLogo}>
            <Image
              boxSize="80px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
          </GridItem>

          <GridItem sx={styleLogo}>
            <Image
              boxSize="80px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
          </GridItem>

          <GridItem sx={styleLogo}>
            <Image
              boxSize="80px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
          </GridItem>

          <GridItem sx={styleLogo}>
            <Image
              boxSize="80px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            />
          </GridItem>

          <GridItem sx={styleLogo}>
            <Image
              boxSize="80px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            />
          </GridItem>

          <GridItem sx={styleLogo}>
            <Image
              boxSize="80px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            />
          </GridItem>

          <GridItem sx={styleLogo}>
            <Image
              boxSize="80px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
            />
          </GridItem>

          <GridItem sx={styleLogo}>
            <Image
              boxSize="80px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
            />
          </GridItem>

          <GridItem sx={styleLogo}>
            <Image
              boxSize="80px"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            />
          </GridItem>
        </Grid>

        <Box pt="3rem">
          <Heading as="h3" textAlign="center" size="lg" fontSize="2xl" pb={3}>
            Soft Skills
          </Heading>

          <Accordion allowMultiple w="80%" m="0 auto">
            <AccordionItem>
              <AccordionButton>
                <Text as="b" fontSize="1.2rem" flex={1} textAlign="left">
                  Curiosidad
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Este fue el motivo principal por el cual me adentre en el mundo
                de la programación. Siento mucha curiosidad por saber como es
                que funcionan las cosas cuando no las entiendo.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Text as="b" fontSize="1.2rem" flex={1} textAlign="left">
                  Empatía
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Soy una persona comprensiva, siempre trato de entender y ponerme
                en el lugar de la otra persona cuando se encuentra con un
                problema y trato de encontrar la mejor forma para ayudar a
                solucionarlo.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Text as="b" fontSize="1.2rem" flex={1} textAlign="left">
                  Sociable
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Una de las cosas por las que me encanta a lo que me dedico es
                trabajar en equipo, me gusta conocer gente y compartir sea
                anécdotas como conocimientos acerca de determinado tema.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Text as="b" fontSize="1.2rem" flex={1} textAlign="left">
                  Autodidacta
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Como mencione antes, soy una persona que siente mucha
                curiosidad, lo que me lleva a dedicarle tiempo leyendo
                documentación o viendo algún video sobre temas y herramientas
                que me gustaría implementar en mis aplicaciones.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Text as="b" fontSize="1.2rem" flex={1} textAlign="left">
                  Proactivo
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Me gusta tomar la iniciativa a la hora de proponer una idea para
                los proyectos y siempre trato de hacer una estructura mental del
                proyecto para así evitar problemas a futuro.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Text as="b" fontSize="1.2rem" flex={1} textAlign="left">
                  Cooperación
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Me gusta tanto trabajar como ayudar a mis compañeros siempre que
                se necesite y hacer que el entorno de trabajo sea lo más fluido
                posible, así poder lograr la meta que se tiene como equipo.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </>
  );
}

export default Skills;
