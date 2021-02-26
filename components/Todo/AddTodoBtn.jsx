import { IconButton, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { AddIcon } from "../Icons";
import AddTodoModal from "./AddTodoModal";

const AddTodoBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="Add todo"
        textColor="whiteAlpha.900"
        icon={<AddIcon />}
        size="lg"
        borderRadius="999px"
        bg="brand.600"
      />
      <AddTodoModal isOpen={isOpen} initialRef={initialRef} onClose={onClose} />
    </>
  );
};

export default AddTodoBtn;
