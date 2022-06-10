import { createContext, useContext } from "react";
import { TaskProps, TaskState } from "@/interfaces/task";

export type TaskContextProps = {
  tasksData: TaskState;
  createTask: (task: TaskProps) => void;
};

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
);

export const useTask = () => useContext(TaskContext);
