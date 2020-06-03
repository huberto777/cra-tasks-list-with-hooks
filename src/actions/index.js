export const setTasks = (tasks) => ({ type: "SET_TASKS", tasks });
export const addTask = (task) => ({ type: "ADD_TASK", task });
export const setError = (error) => ({ type: "SET_ERROR", error });
export const deleteTask = (removedTask) => ({
  type: "DELETE_TASK",
  removedTask,
});
export const loadingIndicator = () => ({ type: "LOADING" });
export const replaceTask = (replacedTask) => ({
  type: "REPLACE_TASK",
  replacedTask,
});
export const searchInput = (e) => ({
  type: "SEARCH_INPUT",
  payload: e.target.value.toLowerCase(),
});
export const searchTask = () => ({
  type: "SEARCH_TASK",
});
