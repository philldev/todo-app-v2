import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import useSignupForm from "./hooks/useSignupForm";

const SignupForm = () => {
  const handleSubmit = useSignupForm();
  return (
    <VStack onSubmit={handleSubmit} spacing="4" as="form" alignItems="stretch">
      <FormControl id="username" isRequired>
        <FormLabel>Username</FormLabel>
        <Input placeholder="John Doe" name="username" />
      </FormControl>
      <Box>
        <Button display="block" size="md" w="100%" type="submit">
          Signup
        </Button>
      </Box>
    </VStack>
  );
};

export default SignupForm;
