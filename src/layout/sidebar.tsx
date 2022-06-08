import { SidebarProps } from "@/interfaces/components";
import { Box, Divider, Flex } from "@chakra-ui/react";
import Item from "@/layout/item";
import { Gear, PaperPlaneTilt, Star, SunDim, Wrench } from "phosphor-react";
import Auth from "@/components/auth";

const Sidebar = (props: SidebarProps) => {
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
      borderRightWidth="2px"
      borderColor="border.dark"
      w="60"
      {...props}
    >
      <Flex as="nav" direction="column" px="4" py="5">
        <Auth />
        <Divider mb="2" borderColor="border.dark" />
        <Item title="My day" icon={<SunDim size={18} weight="bold" />}>
          My day
        </Item>
        <Item title="Important" icon={<Star size={18} weight="bold" />}>
          Important
        </Item>
        <Item
          title="Planning"
          icon={<PaperPlaneTilt size={18} weight="bold" />}
        >
          Planning
        </Item>
        <Item title="Work" icon={<Wrench size={18} weight="bold" />}>
          Work
        </Item>
        <Divider mt="2" mb="2" borderColor="border.dark" />
        <Item title="Work" icon={<Gear size={18} weight="bold" />}>
          Settings
        </Item>
      </Flex>
    </Box>
  );
};

export default Sidebar;
