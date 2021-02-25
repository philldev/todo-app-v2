import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import useEditProfileForm from "./hooks/useEditProfileForm";

const EditProfileForm = () => {
  const { handleSubmit, user, logout, router } = useEditProfileForm();
  return (
    <VStack spacing="4" as="form" alignItems="stretch" onSubmit={handleSubmit}>
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
  );
};

export default EditProfileForm;
