/* Styles */
import { createHeaderStyles } from './styles';

/* UI */
import { Box, Button } from '@chakra-ui/react';

/* Parts */
import { InfoPopover } from './InfoPopover';
import { Profile } from './Profile';

/* Header */
export const Header = () => {
  /* CSS */
  const headerStyles = createHeaderStyles();

  return (
    <Box w="100%" h="100%">
      <header {...headerStyles.headerBase}>
        <Button {...headerStyles.logoButton}>Dev Demo</Button>
        <div {...headerStyles.iconArea}>
          {/* Profile */}
          <Profile />
        </div>
      </header>
    </Box>
  );
};
