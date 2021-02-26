import { VStack } from "@chakra-ui/react";

const ProfileLayout = ({ children }) => (
  <VStack alignItems="stretch" spacing="4" gridArea="main" p="2">
    {children}
  </VStack>
);

export default ProfileLayout;
