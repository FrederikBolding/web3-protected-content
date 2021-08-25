import {
  Box,
  Container,
  Heading,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <Box
      pt={{ base: "6rem", md: "8rem" }}
      pb={{ base: "0", md: "5rem" }}
      textAlign="center"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Center>
          <Heading m="2" as="h1" size="2xl">
            Hello World!
          </Heading>
        </Center>
        <Text mt="4" opacity="0.75">
          Yada yada yada
        </Text>
        <Center mt="4">
          <Button size="lg" as="a" fontSize="1.3rem" h="3.5rem">
            Login
          </Button>
        </Center>
      </Container>
    </Box>
  );
}
