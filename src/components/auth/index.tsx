import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CaretDown } from "phosphor-react";
import Avatar from "boring-avatars";

const Index = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        fontWeight="light"
        leftIcon={<Avatar size={20} name="Manz" variant="beam" />}
        textAlign="left"
        mb="2"
        pl="4"
      >
        <Text fontFamily="Inter-Semibold">pheralb</Text>
        <Text color="gray.500">#pheralb</Text>
      </MenuButton>
      <MenuList bg={bg}>
        <MenuItem>Download</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Index;
