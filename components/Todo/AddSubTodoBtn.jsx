import { IconButton, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { AddIcon } from "../Icons"
import AddTodoModal from "./AddTodoModal"
import SubTodoForm from "./SubTodoForm"

const AddSubTodoBtn = ({ parentText, item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef()
  return (
    <>
      <IconButton
        bgColor="brand.600"
        aria-label="Add SubTodo"
        size="xs"
        icon={<AddIcon color="gray.50" opacity="0.75" />}
        mr="2"
        onClick={onOpen}
      />
      <AddTodoModal
        render={
          <SubTodoForm initialRef={initialRef} item={item} onClose={onClose} />
        }
        label={`Add sub todo from ${parentText}`}
        initialRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

export default AddSubTodoBtn
