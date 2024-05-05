import { Task } from "../interfaces/TaskInterface";

export const DEFAULT_TASK_TITLE = "New Task";
export const DEFAULT_TASK_DESCRIPTION = "This is a test for a new task";

export const DEFAULT_TASK: Task = {
	title: DEFAULT_TASK_TITLE,
	status: '',
  description: DEFAULT_TASK_DESCRIPTION,
  userId: '',
  refUserId: '',
}

export const DEFAULT_TASKS: Task[] = [
	DEFAULT_TASK
];
