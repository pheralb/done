import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Sidebar from "@/layout/sidebar";
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
        <IconButton
          aria-label="Menu"
          display={{ base: "inline-flex", md: "none" }}
          onClick={sidebar.onOpen}
          icon={<List size={22} weight="bold" />}
          size="sm"
        />
        <Box as="main" p="4">
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
