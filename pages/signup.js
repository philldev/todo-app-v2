import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import SignupLayout from "../components/Layout/SignupLayout";
import SignupForm from "../components/User/SignupForm";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <SignupLayout>
        <Heading textAlign="center">Signup</Heading>
        <SignupForm />
      </SignupLayout>
    </>
  );
}
