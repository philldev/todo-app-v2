import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"

const AddTodoModal = ({ isOpen, onClose, initialRef, label, render }) => {
  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent shadow="2xl" mx="2">
        <ModalCloseButton />
        <ModalHeader>{label}</ModalHeader>
        <ModalBody py="0" pb="4">
          {render}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AddTodoModal
