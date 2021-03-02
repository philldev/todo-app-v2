import { Flex, IconButton, Input } from "@chakra-ui/react"
import { AddIcon } from "../Icons"
import useSubTodoForm from "./hooks/useSubTodoForm"

const SubTodoForm = (props) => {
  const { text, setText, addSubTodo } = useSubTodoForm()
  return (
    <Flex gridGap={4} p="2" {...props}>
      <Input
        id="add-todo"
        onKeyPress={(evt) => {
          if (evt.key === "Enter") {
            console.log(text)
            addSubTodo(props.item.id, text)
            setText("")
            props.onClose()
          }
        }}
        ref={props.initialRef}
        tabIndex="-1"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <IconButton
        onClick={() => {
          addSubTodo(text)
          setText("")
          props.onClose()
        }}
        aria-label="Add todo"
        textColor="whiteAlpha.900"
        icon={<AddIcon />}
        size="md"
        backgroundColor="brand.600"
      />
    </Flex>
  )
}

export default SubTodoForm
