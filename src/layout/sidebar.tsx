import { SidebarProps } from "@/interfaces/sidebar";
import { Box, Divider, Flex, useColorModeValue } from "@chakra-ui/react";
import Item from "@/layout/item";
import { Check, Gear, PaperPlaneTilt, Star, SunDim, Wrench } from "phosphor-react";
import Auth from "@/components/auth";
import Create from "@/components/task/create";

const Sidebar = (props: SidebarProps) => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      bg={bg}
      borderRightWidth="2px"
      borderColor="border.dark"
      w="60"
      {...props}
    >
      <Flex as="nav" direction="column" px="4" py="7">
        <Auth />
        <Create />
        <Divider mt="2" mb="2" borderColor="border.dark" />
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
        <Item title="Work" icon={<Check size={18} weight="bold" />}>
          Completed
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
