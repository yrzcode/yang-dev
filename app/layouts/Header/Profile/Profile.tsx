/* UI */
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

/* Styles */
import { createProfileStyles } from "./styles";

/* Profile */
export const Profile = () => {
  const styles = createProfileStyles();

  return (
    <Box h="100%" w="100%">
      <Menu>
        <MenuButton as={Button} colorScheme="pink">
          Profile
        </MenuButton>

        <MenuList color="red" {...styles.menuList}>
          <MenuGroup title="Profile">
            <MenuItem {...styles.menuItem}>My Account</MenuItem>
            <MenuItem {...styles.menuItem}>Payments </MenuItem>
          </MenuGroup>

          <MenuDivider />

          <MenuGroup title="Help">
            <MenuItem {...styles.menuItem}>Docs</MenuItem>
            <MenuItem {...styles.menuItem}>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};
