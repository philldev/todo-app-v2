import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";

export default function useEditProfileForm() {
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
  return {
    handleSubmit,
    user,
    logout,
    router,
  };
}
