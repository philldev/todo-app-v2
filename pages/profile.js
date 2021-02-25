import { Heading, VStack } from "@chakra-ui/react";
import Head from "next/head";
import EditProfileForm from "../components/User/EditProfileForm";

export default function profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <VStack alignItems="stretch" spacing="4" gridArea="main">
        <Heading>Profile</Heading>

        <EditProfileForm />
      </VStack>
    </>
  );
}
