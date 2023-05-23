import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ListItem,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
import React from "react";

function CardCUI({ name, img, tag, link, tech }) {
  const redirectAnotherWindow = (link) => {
    window.open(link, "_blank");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card w="20rem">
        <CardHeader textAlign="center" p={2}>
          <Heading size="md">{name}</Heading>
        </CardHeader>
        <CardBody p="0.5rem 1rem" pb={0} textAlign="center">
          <Image src={img} borderRadius="0.3rem" alt={name} />
          <Text p="0.5rem 0">{tag}</Text>
        </CardBody>
        <CardFooter p="0.5rem">
          <Button
            type="button"
            color="#ffffff"
            bg="#2ecc71"
            width="100%"
            onClick={onOpen}
          >
            Ver proyecto
          </Button>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" alignItems="center">
            <Image
              src={img}
              style={{ width: "800px", height: "500px" }}
              objectFit="fill"
            />
            <Box w="70%">
              <Text p="1rem 0">Tecnologias usadas:</Text>
              <UnorderedList
                p="0"
                display="grid"
                gridTemplateColumns="repeat(4, 1fr)"
              >
                {tech.map((tech, index) => (
                  <ListItem key={index}>{tech}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              w="100%"
              color="#fff"
              bg="#2ecc71"
              onClick={() => redirectAnotherWindow(link)}
            >
              Ir al proyecto
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardCUI;
