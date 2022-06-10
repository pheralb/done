import { useContext } from "react";
import { TaskContext } from "@/context/taskContext";
import { Button } from "@chakra-ui/react";

type Props = {};

const TaskList = (props: Props) => {
  const { tasksData, createTask } = useContext(TaskContext);

  const handleClick = () => {
    createTask({
      title: "New Task",
      description: "New Task Description",
      group: "New Task Group",
    });
  };

  return (
    <div>
      <Button onClick={handleClick}>Create task</Button>
    </div>
  );
};

export default TaskList;
