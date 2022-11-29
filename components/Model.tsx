import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import React from 'react'

const ModelUI = (props: any) => {
  return (
    <div>
      <Modal
        isCentered
        onClose={props.onClose}
        isOpen={props.isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submitted</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{props.data.name}</Text>
            <Text>{props.data.surname}</Text>
            <Text>{props.data.email}</Text>
            <Text>{props.data.age}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ModelUI
