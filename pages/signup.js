import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

export default function Signup() {
  const { signup, user } = useContext(UserContext);
  const router = useRouter();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const username = evt.target.username.value;
    if (username) {
      signup(username);
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <Box p="2">
        <Heading textAlign="center">Signup</Heading>
        <VStack
          onSubmit={handleSubmit}
          spacing="4"
          as="form"
          alignItems="stretch"
        >
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input placeholder="John Doe" name="username" />
          </FormControl>
          <Box>
            <Button
              display="block"
              size="md"
              w="100%"
              type="submit"
              colorScheme="blue"
            >
              Signup
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
