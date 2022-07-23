import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Sidebar from "./sidebar";
import { SidebarProps } from "@/interfaces/sidebar";
import { List } from "phosphor-react";

const Index = (props: SidebarProps) => {
  const sidebar = useDisclosure();
  return (
    <Box as="section" minH="100vh">
      <Sidebar display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar width="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          borderBottomWidth="1px"
          color="inherit"
          h="14"
          display={{ base: "inline-flex", md: "none" }}
        >
          <IconButton
            aria-label="Menu"
            onClick={sidebar.onOpen}
            icon={<List />}
            size="sm"
          />
        </Flex>
        <Box as="main" p="4">
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
