/* React */
import { ReactNode } from 'react';

/* UI */
import { useDisclosure, Box, Flex, Stack } from '@chakra-ui/react';

/* Parts */
import { Header } from './Header';
import { DrawerMenu } from './DrawerMenu';
import { SidebarMenu } from './SidebarMenu';
import { InfoPopover } from './Header/InfoPopover';

/* App layouts */
export default function AppLayouts(props: Readonly<{ children: ReactNode }>) {
  /* Props */
  const { children } = props;

  return (
    <>
      {/* App Drawer Menu */}
      <Box>
        <DrawerMenu />
      </Box>

      <Flex direction="column" height="100%">
        {/* App Header */}
        <Box h="60px" borderBottom="1px" borderBottomColor="white">
          <Header />
        </Box>

        <Flex flex={1}>
          {/* App Sidebar Menu */}
          <Box w="200px">
            <SidebarMenu />
          </Box>

          <Box flex={1}>
            {/* App Pages */}
            {children}
          </Box>
        </Flex>
      </Flex>

      {/* Information */}
      <Box position="absolute" bottom={4} right={4}>
        <InfoPopover />
      </Box>
    </>
  );
}
