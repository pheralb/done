import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { TaskContext } from "@/context/taskContext";
import { TaskProviderProps } from "@/interfaces/provider";
import { TaskProps, TaskState } from "@/interfaces/task";
import toast from "react-hot-toast";
import { toastStyle } from "@/theme/toast";

const initialData: TaskState = {
  tasks: [],
  taskCount: 0,
  allCompleted: false,
  pending: 0,
};

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasksData, setTasksData] = useState<TaskState>(
    localStorage.getItem("tasksData")
      ? JSON.parse(localStorage.getItem("tasksData")!)
      : initialData
  );

  useEffect(() => {
    localStorage.setItem("tasksData", JSON.stringify(tasksData));
  }, [tasksData]);

  // Create new task ->
  const createTask = (task: TaskProps) => {
    setTasksData({
      ...tasksData,
      tasks: [
        ...tasksData.tasks,
        { id: nanoid(6), createdAt: Date.now(), completed: false, ...task },
      ],
      taskCount: tasksData.taskCount + 1,
      pending: tasksData.pending + 1,
    });
    toast("New task created", {
      icon: "🥳",
      style: toastStyle,
    });
  };

  return (
    <TaskContext.Provider value={{ tasksData, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
