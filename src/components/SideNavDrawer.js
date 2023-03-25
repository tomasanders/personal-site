import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Heading,
} from '@chakra-ui/react';

import { useRef } from 'react';
import { ContactForm } from './ContactForm';
import { BsChatLeftDots } from "react-icons/bs";

export const SideNavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        icon={<BsChatLeftDots />}
        variant='outline'
        color='gray.100'
        fontSize='3xl'
        border='0'
        aria-label='Open Contact Form'
      />

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent bgColor='gray.900'>
          <DrawerCloseButton color='gray.100' size='md' />

          <DrawerHeader>
            <Heading color='gray.100' fontSize='md'>contact me</Heading>
          </DrawerHeader>

          <DrawerBody>
            <ContactForm />
          </DrawerBody>

          <DrawerFooter>
            <Button onClick={onClose} variant='outline' borderColor='gray.100' color='gray.100' size='lg' >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
