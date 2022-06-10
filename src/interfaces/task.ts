// Task ->
export interface TaskProps {
  id?: string;
  title?: string;
  description?: string;
  group?: string;
  createdAt?: number;
  completed?: boolean;
}

export interface TaskState {
  tasks: TaskProps[];
  taskCount: number;
  allCompleted: boolean;
  pending: number;
}
