import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import HHHimg from "../../assets/Happy-Hour-Helper-img.png";

function Projects() {
  const redirect = (link) => {
    return (window.location.href = link);
  };

  return (
    <>
      <Box m="3rem 0" bg="#ffffff" borderRadius="0.4rem">
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
          p={"3rem 1rem"}
          bg="#ecf0f1"
          wrap="wrap"
          borderRadius="0 0 0.4rem 0.4rem"
        >
          <Card w="20rem">
            <CardHeader textAlign="center">
              <Heading size="md">Happy Hour Helper</Heading>
            </CardHeader>
            <CardBody pb={3} textAlign="center">
              <Image src={HHHimg} borderRadius="0.3rem" />
              <Text p="0.5rem 0" as="b">
                E-Commerce
              </Text>
            </CardBody>
            <CardFooter pt={0}>
              <Button
                type="button"
                color="#ffffff"
                bg="#2ecc71"
                width="100%"
                onClick={() => redirect("https://happy-hour-helper.vercel.app")}
              >
                Ver proyecto
              </Button>
            </CardFooter>
          </Card>
        </Flex>
      </Box>
    </>
  );
}

export default Projects;
