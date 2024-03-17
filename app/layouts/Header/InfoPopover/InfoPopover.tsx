'use client';

/* React */
import { useState, useEffect, useRef } from 'react';

/* UI */
import {
  Avatar,
  Box,
  Button,
  HStack,
  Popover,
  PopoverAnchor,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

/* Icon */
import { CiSquareMore } from 'react-icons/ci';

/* Hover Info Icon */
export const InfoPopover = () => {
  const initRef = useRef(null);

  const { isPopoverOpen, openPopover, closePopover } = useHoverPopover();
  return (
    <Popover
      isOpen={isPopoverOpen}
      closeOnBlur
      placement="top"
      initialFocusRef={initRef}
    >
      <HStack>
        <PopoverAnchor>
          <Box position="relative" bottom="20px" right="130px"></Box>
        </PopoverAnchor>

        <PopoverTrigger>
          <CiSquareMore
            color="white"
            size={30}
            onMouseOver={openPopover}
            onMouseLeave={closePopover}
          />
        </PopoverTrigger>

        <Portal>
          <PopoverContent>
            <PopoverHeader>
              <Wrap>
                <WrapItem>
                  <Avatar name="Yang" src="https://bit.ly/dan-abramov" />
                </WrapItem>
              </Wrap>
            </PopoverHeader>
            <PopoverBody>
              <Box>Hello. Welcome to my demo site for web development!</Box>
            </PopoverBody>
            <PopoverFooter>Connect: yangdevweb@gmail.com</PopoverFooter>
          </PopoverContent>
        </Portal>
      </HStack>
    </Popover>
  );
};

const useHoverPopover = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  useEffect(() => {
    console.log('isPopoverOpen', isPopoverOpen);
  });
  const openPopover = () => setIsPopoverOpen(true);
  const closePopover = () => setIsPopoverOpen(false);

  return { isPopoverOpen, openPopover, closePopover } as const;
};
