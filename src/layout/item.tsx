import { SidebarItemProps } from "@/interfaces/components";
import { Box, Flex, HStack } from "@chakra-ui/react";

const Item = (props: SidebarItemProps) => {
  return (
    <HStack
      px="4"
      pl="4"
      py="3"
      spacing={3}
      cursor="pointer"
      role="group"
      transition=".15s ease"
    >
      <Box>{props.icon}</Box>
      <Box>{props.children}</Box>
    </HStack>
  );
};

export default Item;
