import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function profile() {
  const { user, logout, edit } = useContext(UserContext);
  const router = useRouter();
  const toast = useToast();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newUsername = evt.target.username.value;
    if (newUsername) {
      edit(newUsername);
      toast({
        title: "Username changed",
        description: "Successfully chanded your username",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <VStack alignItems="stretch" spacing="4" gridArea="main">
        <Heading>Profile</Heading>
        <VStack
          spacing="4"
          as="form"
          alignItems="stretch"
          onSubmit={handleSubmit}
        >
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="John Doe"
              name="username"
              defaultValue={user.username}
            />
          </FormControl>
          <Box>
            <Button
              display="block"
              size="md"
              w="100%"
              type="submit"
              colorScheme="blue"
              mb="2"
            >
              Edit
            </Button>
            <Button
              display="block"
              size="md"
              w="100%"
              variant="unstyled"
              onClick={() => {
                logout();
                router.push("/signup");
              }}
            >
              Logout
            </Button>
          </Box>
        </VStack>
      </VStack>
    </>
  );
}
