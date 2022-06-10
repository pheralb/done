import { TaskProps } from "@/interfaces/task";

export type TaskContextType = {
  tasks: TaskProps[];
  addTask: (task: TaskProps) => void;
  completeTask: (id: string) => void;
};
