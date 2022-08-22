import { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import FormLogin from "./FromLogin";

const ModalLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef(null);
  return (
    <>
      <Box
        ref={btnRef}
        onClick={onOpen}
        fontWeight="semibold"
        w="100%"
        fontSize="16px"
      >
        Log In
      </Box>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        size="lg"
        scrollBehavior="inside"
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader m="auto">Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLogin onClose={onClose}/>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLogin;
