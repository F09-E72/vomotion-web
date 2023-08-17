import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { NotebookProp } from "../organisms/NotebookGrid";

interface ModalProps {
    addNotebook: (notebook: NotebookProp) => void
}

const ModalComponent = ({addNotebook}: ModalProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [title, setTitle] = useState("")

  return (
    <>
      <Button w={'100%'} h={'100%'} onClick={onOpen}>
        <AddIcon />
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Notebook</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={
                () => { 
                    setTitle("")
                    addNotebook({Id: 3, Title: title})
                }
            } 
            colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
