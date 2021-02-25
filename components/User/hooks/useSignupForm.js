import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";

export default function useSignupForm() {
  const { signup } = useContext(UserContext);
  const router = useRouter();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const username = evt.target.username.value;
    if (username) {
      signup(username);
      router.push("/");
    }
  };
  return handleSubmit;
}
