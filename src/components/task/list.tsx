import { useTask } from "@/context/taskContext";
import TaskItem from "@/components/task/item";

const TaskList = () => {
  const { tasksData } = useTask();
  return (
    <>
      {tasksData.tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </>
  );
};

export default TaskList;
