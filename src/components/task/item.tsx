import { TaskProps } from "@/interfaces/task";
import { Flex, Box, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { Circle } from "phosphor-react";

const Item = (props: TaskProps) => {
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      w="full"
      borderBottomWidth="1px"
      p="4"
    >
      <HStack spacing={3}>
        <Icon as={Circle} w={4} h={4} />
        <Text fontSize="16px" noOfLines={1}>
          {props.title}
        </Text>
      </HStack>
      <Text color="gray.500">{props.createdAt}</Text>
    </Flex>
  );
};

export default Item;
