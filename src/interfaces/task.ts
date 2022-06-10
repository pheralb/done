// Task ->
export interface TaskProps {
  id?: string;
  title?: string;
  description?: string;
  group?: string;
  createdAt?: string;
  completed?: boolean;
}

export interface TaskState {
  tasks: TaskProps[];
  taskCount: number;
  allCompleted: boolean;
  pending: number;
}
