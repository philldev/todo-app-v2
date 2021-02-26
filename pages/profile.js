import { Heading, VStack } from "@chakra-ui/react";
import Head from "next/head";
import ProfileLayout from "../components/Layout/ProfileLayout";
import EditProfileForm from "../components/User/EditProfileForm";

export default function profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfileLayout>
        <Heading>Profile</Heading>
        <EditProfileForm />
      </ProfileLayout>
    </>
  );
}
