'use client';

/* React */
import { useRef } from 'react';

/* UI */
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

/* CSS */
import { createDrawerStyles } from './styles';

/* Styles */
const drawerStyles = createDrawerStyles();

/* DrawerMenu */
export const DrawerMenu = () => {
  /* Side drawer menu controller */
  const {
    isOpen: isDrawerMenuOpen,
    onOpen: openDrawerMenu,
    onClose: closeDrawerMenu,
  } = useDisclosure();

  const btnRef = useRef(null);

  return (
    <>
      <Button
        {...drawerStyles.openSideDrawerBtn}
        ref={btnRef}
        position="absolute"
        top={0}
        left={0}
        onClick={openDrawerMenu}
      />

      <Drawer
        isOpen={isDrawerMenuOpen}
        placement="right"
        onClose={closeDrawerMenu}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={closeDrawerMenu}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
