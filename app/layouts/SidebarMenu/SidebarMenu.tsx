/* UI */
import { Box, Button, Stack } from '@chakra-ui/react';

/* Styles */
import { createSidebarStyles } from './styles';

export const SidebarMenu = () => {
  const sidebarStyles = createSidebarStyles();
  return (
    <Box {...sidebarStyles.base}>
      <Stack px={4} pt={4}>
        <Button colorScheme="messenger">Video</Button>
        <Button colorScheme="messenger">Message</Button>
        <Button colorScheme="messenger">Other App</Button>
        <Button colorScheme="messenger">Connect</Button>
      </Stack>
    </Box>
  );
};
