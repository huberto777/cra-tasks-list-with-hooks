const initialState = {
  tasks: [],
  searchQuery: '',
  editMode: false,
  loading: true,
  error: null,
  currentEditTask: null,
  create: false,
};

export const tasksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_TASKS': {
      const { tasks } = action;
      return { ...state, tasks };
    }
    case 'SEARCH_TASK': {
      const tasks = state.tasks.filter(({ name }) =>
        name.toLowerCase().includes(state.searchQuery),
      );
      return { ...state, tasks };
    }
    case 'ADD_TASK': {
      const { task } = action;
      const tasks = [...state.tasks, task];
      return { ...state, tasks, create: false, searchQuery: '' };
    }
    case 'REPLACE_TASK': {
      const { replacedTask } = action;
      const tasks = state.tasks.map((task) => (task.id === replacedTask.id ? replacedTask : task));
      return { ...state, tasks, editMode: false, currentEditTask: null };
    }
    case 'DELETE_TASK': {
      const { removedTask } = action;
      const tasks = state.tasks.filter((task) => task.id !== removedTask.id);
      return { ...state, tasks };
    }
    case 'TASK_EDIT_START': {
      const { task } = action;
      return { ...state, task, currentEditTask: task.id, editMode: true };
    }
    case 'TASK_EDIT_STOP': {
      return { ...state, currentEditTask: null, editMode: false };
    }
    case 'COMPLETE_TASK': {
      const { completedTask } = action;
      const tasks = state.tasks.map((task) => {
        if (task.id === completedTask.id) {
          task.done = !task.done;
          task.finishDate = task.done ? new Date().toISOString().slice(0, 10) : null;
        }
        return task;
      });
      return { ...state, tasks };
    }
    case 'SET_ERROR': {
      const { error } = action;
      return { ...state, error };
    }
    case 'LOADING': {
      return { ...state, loading: false };
    }
    case 'SEARCH_INPUT': {
      const { payload } = action;
      return {
        ...state,
        searchQuery: payload,
      };
    }
    case 'CREATE_MODE': {
      return {
        ...state,
        create: true,
      };
    }
    case 'CANCEL_CREATE': {
      return {
        ...state,
        create: false,
        searchQuery: '',
      };
    }
    default:
      return state;
  }
};
