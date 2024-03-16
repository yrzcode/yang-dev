/* Styles */
import { createHeaderStyles } from './styles';

/* UI */
import { Button } from '@chakra-ui/react';

/* Parts */
import { InfoPopover } from './InfoPopover';

/* Header */
export const Header = () => {
  /* CSS */
  const headerStyles = createHeaderStyles();
  return (
    <header {...headerStyles.headerBase}>
      <Button {...headerStyles.logoButton}>DevDemo</Button>
      <div {...headerStyles.iconArea}>
        <InfoPopover />
      </div>
    </header>
  );
};
