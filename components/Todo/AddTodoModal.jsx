import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import TodoForm from "./TodoForm";

const AddTodoModal = ({ isOpen, onClose, initialRef }) => {
  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent shadow="2xl" mx="2">
        <ModalCloseButton />
        <ModalHeader>Add new task</ModalHeader>
        <ModalBody py="0" pb="4">
          <TodoForm initialRef={initialRef} onClose={onClose} px="0" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddTodoModal;
