import { IconButton, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { AddIcon } from "../Icons"
import AddTodoModal from "./AddTodoModal"
import TodoForm from "./TodoForm"

const AddTodoBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef()
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
      <AddTodoModal
        isOpen={isOpen}
        label="Add Todo"
        initialRef={initialRef}
        onClose={onClose}
        render={<TodoForm initialRef={initialRef} onClose={onClose} px="0" />}
      />
    </>
  )
}

export default AddTodoBtn
