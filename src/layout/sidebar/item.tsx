import React from "react";
import { SidebarItemProps } from "@/interfaces/sidebar";
import { Flex, Icon } from "@chakra-ui/react";

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      mb="2"
      cursor="pointer"
      role="group"
      transition=".15s ease"
      borderWidth="1px"
      borderRadius="5px"
      {...props}
    >
      <Icon ml="2" mr="3" boxSize="6" as={props.icon} />
      {props.children}
    </Flex>
  );
};

export default SidebarItem;
