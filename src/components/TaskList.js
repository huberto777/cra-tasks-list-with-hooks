import React, { useReducer, useEffect, useContext } from "react";
import "./App.css";
import AuthContext from "../context/AuthContext";
import AddTask from "./AddTask";
import TaskTable from "./TaskTable";
import EditTask from "./EditTask";
import TasksAPI from "./api/AxiosTasksApi";
import { tasksReducer } from "../reducers";
import {
  setTasks,
  setError,
  loadingIndicator,
  deleteTask,
  addTask,
  replaceTask,
  searchInput,
  searchTask,
} from "../actions";

import SearchTask from "./SearchTask";

function TaskList() {
  const [state, dispatch] = useReducer(tasksReducer, undefined, tasksReducer);
  const { accessToken } = useContext(AuthContext);

  useEffect(() => {
    TasksAPI.getAllTasks(accessToken)
      .then((tasks) => dispatch(setTasks(tasks)))
      .catch((error) => dispatch(setError(error)))
      .finally(() => dispatch(loadingIndicator()));
    TasksAPI.getTasksByFullTextSearch(state.searchQuery, accessToken).then(
      () => {
        dispatch(searchTask());
      }
    );
  }, [accessToken, state.searchQuery]);

  const removeTask = (taskToRemove) => {
    TasksAPI.removeTask(taskToRemove, accessToken).then(() =>
      dispatch(deleteTask(taskToRemove))
    );
  };

  const handleCreate = (task) => {
    try {
      TasksAPI.addTask(task, accessToken).then((addedTask) =>
        dispatch(addTask(addedTask))
      );
    } catch (error) {
      console.log("Jest błąd przy tworzeniu taska:", error);
    }
  };

  const handleEditTask = (task) => {
    dispatch({ type: "TASK_EDIT_START", task });
  };

  const handleDoneTask = (taskToComplete) => {
    TasksAPI.finishTask(taskToComplete, accessToken).then(() =>
      dispatch({ type: "COMPLETE_TASK", completedTask: taskToComplete })
    );
  };

  const { tasks, edit, error, loading } = state;
  return (
    <>
      {edit ? (
        <EditTask
          task={state.task.action.task}
          update={(updatedTask) => {
            const taskToUpdate = { ...state.task, ...updatedTask };
            TasksAPI.replaceTask(
              taskToUpdate,
              accessToken
            ).then((replacedTask) => dispatch(replaceTask(replacedTask)));
          }}
          edit={handleEditTask}
        />
      ) : (
        <>
          <div className="jumbotron bg-dark text-white col-{-sm|-md|-lg|-xl}">
            <AddTask addTask={handleCreate} />
            <SearchTask search={(e) => dispatch(searchInput(e))} />
          </div>
          {error ? "Nie udało się załadować :(" : null}
          {loading ? "taski się ładują..." : null}

          <TaskTable
            loading={loading}
            tasks={tasks}
            delete={removeTask}
            done={handleDoneTask}
            edit={handleEditTask}
          />
        </>
      )}
    </>
  );
}

export default TaskList;
