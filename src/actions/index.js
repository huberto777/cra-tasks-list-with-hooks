export const setTasks = (tasks) => ({ type: 'SET_TASKS', tasks });
export const addTask = (task) => ({ type: 'ADD_TASK', task });
export const setError = (error) => ({ type: 'SET_ERROR', error });
export const deleteTask = (removedTask) => ({
  type: 'DELETE_TASK',
  removedTask,
});
export const loadingIndicator = () => ({ type: 'LOADING' });
export const replaceTask = (replacedTask) => ({
  type: 'REPLACE_TASK',
  replacedTask,
});
export const searchInput = (e) => ({
  type: 'SEARCH_INPUT',
  payload: e.target.value.toLowerCase(),
});
export const searchTask = () => ({
  type: 'SEARCH_TASK',
});
export const setCreateMode = () => ({
  type: 'CREATE_MODE',
});
export const cancelCreateMode = () => ({
  type: 'CANCEL_CREATE',
});
export const taskEditStart = (task) => ({
  type: 'TASK_EDIT_START',
  task,
});
export const taskEditStop = () => ({
  type: 'TASK_EDIT_STOP',
});
export const completeTask = (completedTask) => ({
  type: 'COMPLETE_TASK',
  completedTask,
});
