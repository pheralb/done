import { supabaseClient } from "@/services/supabase";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { CaretDown } from "phosphor-react";
import { useEffect } from "react";

const AuthDropdown = () => {
  return (
    <Menu>
      <MenuButton as={Button} mb="3" textAlign="left" rightIcon={<CaretDown />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Log out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AuthDropdown;
