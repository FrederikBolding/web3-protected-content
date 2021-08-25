import { Box, Container, Heading, Center, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { withSession } from "../hooks/withSession";
import { verifyUser } from "../lib/userVerification";

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session?.get("user");

  const verified = verifyUser({
    user,
    tokenAddress: "" // @todo
  });

  if (!verified) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
});

function Secret() {
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
            Secret Page
          </Heading>
        </Center>
        <Text mt="4" opacity="0.75">
          This is very secret
        </Text>
      </Container>
    </Box>
  );
}

export default Secret;
