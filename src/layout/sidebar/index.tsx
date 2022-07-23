import React from "react";
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { SidebarProps } from "@/interfaces/sidebar";
import SidebarItem from "./item";
import { CheckSquare, Cloud, ComputerTower, HouseSimple } from "phosphor-react";
import AuthDropdown from "@/auth/dropdown";
import CustomLink from "@/common/customLink";

const Sidebar = (props: SidebarProps) => {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const color = useColorModeValue("bg.light", "bg.dark");
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <HStack px="4" py="7" align="center">
        <Image src="/images/logo_svg.svg" boxSize="9" />
        <Text fontSize="2xl" ml="2">
          done
        </Text>
      </HStack>
      <Flex direction="column" px="3" as="nav" aria-label="Main Navigation">
        <AuthDropdown />
        <CustomLink href="/">
          <SidebarItem icon={HouseSimple}>Home</SidebarItem>
        </CustomLink>
        <CustomLink href="/local">
          <SidebarItem icon={ComputerTower}>Local tasks</SidebarItem>
        </CustomLink>
        <CustomLink href="/cloud">
          <SidebarItem icon={Cloud}>Cloud tasks</SidebarItem>
        </CustomLink>
      </Flex>
    </Box>
  );
};

export default Sidebar;
