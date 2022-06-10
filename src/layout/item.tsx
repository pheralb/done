import Tap from "@/animations/tap";
import { SidebarItemProps } from "@/interfaces/sidebar";
import { Box, HStack } from "@chakra-ui/react";

const Item = (props: SidebarItemProps) => {
  return (
    <Tap>
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
    </Tap>
  );
};

export default Item;
