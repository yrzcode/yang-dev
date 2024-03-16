/* UI */
import { Box } from '@chakra-ui/react';

/* Styles */
import { createSidebarStyles } from './styles';

export const SidebarMenu = () => {
  const sidebarStyles = createSidebarStyles();
  return <Box {...sidebarStyles.base}>SidebarMenu</Box>;
};
