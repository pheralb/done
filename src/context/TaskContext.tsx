import { createContext } from "react";

interface TaskContextProps {
  children: React.ReactNode;
}

export const TaskContext = createContext({});

export const TaskContextProvider = (props: TaskContextProps) => {
  return <TaskContext.Provider value>{props.children}</TaskContext.Provider>;
};
