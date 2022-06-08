import { Button, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from "@chakra-ui/react";
import { CaretDown } from "phosphor-react";
import React from "react";

type Props = {};

const Index = (props: Props) => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <Menu>
      <MenuButton as={Button} fontWeight="light" rightIcon={<CaretDown size={22} />}>
        Actions
      </MenuButton>
      <MenuList bg={bg}>
        <MenuItem>Download</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Index;
