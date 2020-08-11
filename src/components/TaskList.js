import React, { useReducer, useEffect } from 'react';
// import AuthContext from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddTask from './AddTask';
import TaskTable from './TaskTable';
import TasksAPI from '../api/FakeTasksApi';
import { tasksReducer } from '../reducers';
import {
  setTasks,
  setError,
  loadingIndicator,
  deleteTask,
  addTask,
  replaceTask,
  searchInput,
  searchTask,
  setCreateMode,
  cancelCreateMode,
  taskEditStart,
  taskEditStop,
  completeTask,
} from '../actions';

import SearchTask from './SearchTask';

function TaskList() {
  const [state, dispatch] = useReducer(tasksReducer, undefined, tasksReducer);
  // const { accessToken } = useContext(AuthContext);

  useEffect(() => {
    TasksAPI.getAllTasks()
      .then((tasks) => dispatch(setTasks(tasks)))
      .catch((error) => dispatch(setError(error)))
      .finally(() => dispatch(loadingIndicator()));
    TasksAPI.getTasksByFullTextSearch(state.searchQuery).then(() => {
      dispatch(searchTask());
    });
  }, [state.searchQuery]);

  const removeTask = (taskToRemove) => {
    TasksAPI.removeTask(taskToRemove).then(() => dispatch(deleteTask(taskToRemove)));
  };

  const handleCreate = (task) => {
    try {
      TasksAPI.addTask(task).then((addedTask) => dispatch(addTask(addedTask)));
    } catch (error) {
      console.log('Jest błąd przy tworzeniu taska:', error);
    }
  };

  const handleEditTask = (task) => {
    dispatch(taskEditStart(task));
  };

  const handleDoneTask = (taskToComplete) => {
    TasksAPI.finishTask(taskToComplete).then(() => dispatch(completeTask(taskToComplete)));
  };

  const { tasks, editMode, error, loading, create, currentEditTask } = state;

  return (
    // <>
    //   {edit ? (
    //     <EditTask
    //       task={state.task.action.task}
    //       update={(updatedTask) => {
    //         const taskToUpdate = { ...state.task, ...updatedTask };
    //         TasksAPI.replaceTask(taskToUpdate).then((replacedTask) =>
    //           dispatch(replaceTask(replacedTask)),
    //         );
    //       }}
    //       edit={handleEditTask}
    //     />
    //   ) : (
    <>
      <div className="card bg-dark text-white col-{-sm|-md|-lg|-xl}">
        <div className="card-body">
          {create ? (
            <AddTask addTask={handleCreate} onCancel={() => dispatch(cancelCreateMode())} />
          ) : (
            <>
              <SearchTask search={(e) => dispatch(searchInput(e))} />
              <button onClick={() => dispatch(setCreateMode())} className="btn btn-outline-warning">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </>
          )}
        </div>
      </div>
      {error ? 'Nie udało się załadować :(' : null}
      {loading ? 'taski się ładują...' : null}

      <TaskTable
        loading={loading}
        tasks={tasks}
        del={removeTask}
        done={handleDoneTask}
        edit={handleEditTask}
        editMode={editMode}
        currentEditTask={currentEditTask}
        cancelEdit={() => dispatch(taskEditStop())}
        onUpdate={(updatedTask) => {
          const taskToUpdate = { ...state.task, ...updatedTask };
          TasksAPI.replaceTask(taskToUpdate).then((replacedTask) =>
            dispatch(replaceTask(replacedTask)),
          );
        }}
      />
    </>
  );
}

export default TaskList;
