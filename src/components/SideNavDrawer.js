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
} from '@chakra-ui/react';

import { useRef } from 'react';
import { ContactForm } from './ContactForm';

export const SideNavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>Open</Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef} size='full'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            Header
          </DrawerHeader>

          <DrawerBody>
            <ContactForm />
          </DrawerBody>

          <DrawerFooter>
            <Button onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
