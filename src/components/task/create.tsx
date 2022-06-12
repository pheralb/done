import { BaseSyntheticEvent, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useTask } from "@/context/taskContext";
import { TaskProps } from "@/interfaces/task";
import { Check } from "phosphor-react";
import { useHotkeys } from "react-hotkeys-hook";
import toast from "react-hot-toast";
import { toastStyle } from "@/theme/toast";

const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("bg.light", "bg.dark");
  const [task, setTask] = useState<TaskProps>();
  const { createTask } = useTask();

  useHotkeys("ctrl+s", (e) => {
    e.preventDefault();
    handleOpen();
  });

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const handleOpen = () => {
    setTask({
      title: "",
      description: "",
    });
    onOpen();
  };

  const handleInput = (e: BaseSyntheticEvent) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (task?.title !== "") {
      createTask({
        ...task,
      });
      onClose();
    } else {
      toast(`Title is required`, {
        icon: "🤔",
        style: toastStyle,
      });
    }
  };

  return (
    <>
      <Button onClick={handleOpen} mt="2">
        Create task (ctrl+s)
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent bg={bg} borderWidth="1px" borderRadius="15px">
          <ModalHeader fontWeight="light">New task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleCreate}>
              <Input
                ref={initialRef}
                name="title"
                id="title"
                placeholder="Title"
                mb="3"
                required={true}
                onChange={handleInput}
              />
              <Textarea
                mb="3"
                placeholder="Add description..."
                onChange={handleInput}
              />
              <Select
                name="group"
                id="group"
                onChange={handleInput}
                defaultValue="my-day"
              >
                <option value="my-day">My day</option>
                <option value="important">Important</option>
                <option value="planning">Planning</option>
              </Select>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              leftIcon={<Check size={16} weight="bold" />}
              onClick={handleCreate}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Create;
