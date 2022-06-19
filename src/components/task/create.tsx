import { BaseSyntheticEvent, useRef, useState } from "react";
import { useTask } from "@/context/taskContext";
import { TaskProps } from "@/interfaces/task";
import { Check } from "phosphor-react";
import { useHotkeys } from "react-hotkeys-hook";
import toast from "react-hot-toast";
import { toastStyle } from "@/theme/toast";
import Button from "@/components/button";

const Create = () => {
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
    } else {
      toast(`Title is required`, {
        icon: "🤔",
        style: toastStyle,
      });
    }
  };

  return (
    <>
      <Button onClick={handleOpen}>Create task (ctrl+s)</Button>
    </>
  );
};

export default Create;
