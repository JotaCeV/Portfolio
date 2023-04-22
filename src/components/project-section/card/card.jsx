import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

function CardCUI({ name, img, tag, link }) {
  const redirect = (link) => {
    return (window.location.href = link);
  };

  return (
    <>
      <Card w="20rem">
        <CardHeader textAlign="center">
          <Heading size="md">{name}</Heading>
        </CardHeader>
        <CardBody pb={3} textAlign="center">
          <Image src={img} borderRadius="0.3rem" alt={name} />
          <Text p="0.5rem 0" as="b">
            {tag}
          </Text>
        </CardBody>
        <CardFooter pt={0}>
          <Button
            type="button"
            color="#ffffff"
            bg="#2ecc71"
            width="100%"
            onClick={() => redirect(link)}
          >
            Ver proyecto
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default CardCUI;
