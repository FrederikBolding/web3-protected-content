import {
  Box,
  Container,
  Heading,
  Center,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import useUser from "../hooks/useUser";

function Home() {
  const { login, user } = useUser();

  // @todo: Use Web3 signed message
  const handleConnect = () => login("bla");
  
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
          {JSON.stringify(user)}
        </Text>
        <Center mt="4">
          {!user || !user.isLoggedIn ? (
            <Button
              size="lg"
              as="a"
              fontSize="1.3rem"
              h="3.5rem"
              onClick={handleConnect}
            >
              Connect
            </Button>
          ) : (
            <Link href="/secret">
              <Button size="lg" as="a" fontSize="1.3rem" h="3.5rem">
                View Secret
              </Button>
            </Link>
          )}
        </Center>
      </Container>
    </Box>
  );
}

export default Home;
