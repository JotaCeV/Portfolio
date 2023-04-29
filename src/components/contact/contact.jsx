import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

function Contact({ contactRef }) {
  const styleBtns = {
    padding: "4vh 3vh",
    fontSize: "6vh",
  };

  const redirectAnotherWindow = (link) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <Box
        ref={contactRef}
        p="3rem 1.5rem"
        bg="#ffffff"
        borderRadius="0.4rem"
        height="40vh"
      >
        <Heading color="#2ecc71" textAlign="center" size="2xl" as="h2">
          Contacto
        </Heading>
        <Flex m="2rem 0" justifyContent="center" width="100%" gap={10}>
          <Button
            sx={styleBtns}
            bg="twitter.400"
            color="#fff"
            onClick={() =>
              redirectAnotherWindow("https://twitter.com/jcvetromile")
            }
          >
            <FiTwitter />
          </Button>

          <Button
            sx={styleBtns}
            bg="#1e1e1e"
            color="#fff"
            onClick={() => redirectAnotherWindow("https://github.com/JotaCeV")}
          >
            <FiGithub />
          </Button>

          <Button
            sx={styleBtns}
            bg="blue.500"
            color="#fff"
            onClick={() =>
              redirectAnotherWindow(
                "https://www.linkedin.com/in/juan-cruz-vetromile-438367248/"
              )
            }
          >
            <FiLinkedin />
          </Button>
          <Button
            sx={styleBtns}
            bg="linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)"
            color="#fff"
            onClick={() =>
              redirectAnotherWindow("https://www.instagram.com/jcvetromile/")
            }
          >
            <GrInstagram />
          </Button>
        </Flex>
        <Text fontSize="xl" textAlign="center">
          Tambien puedes contactarme mandando un correo a
        </Text>
        <Heading mt="1rem" fontSize="5xl" textAlign="center">
          jcvetromile@gmail.com
        </Heading>
      </Box>
    </>
  );
}

export default Contact;
