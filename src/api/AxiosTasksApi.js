import axios from "axios";

const BASE_URL = "http://localhost:5000/tasks";
const AxiosTasksAPI = {
  getAllTasks: async function (accessToken) {
    const response = await axios.get(`${BASE_URL}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const tasks = response.data;
    return tasks;
  },
  addTask: async function (taskToAdd, accessToken) {
    const response = await axios.post(`${BASE_URL}`, taskToAdd, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const addedTask = response.data;
    return addedTask;
  },
  replaceTask: async function (taskToReplace, accessToken) {
    if (!taskToReplace.id) {
      throw new Error("task has to have an id to be updated");
    }
    const response = await axios.put(
      `${BASE_URL}/${taskToReplace.id}`,
      taskToReplace,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const replacedTask = await response.data;
    return replacedTask;
  },

  finishTask: async function (taskToFinish, accessToken) {
    if (!taskToFinish.id) {
      throw new Error("task has to have an id to be updated");
    }

    const response = await axios.patch(
      `${BASE_URL}/${taskToFinish.id}`,
      { done: true, finishDate: new Date().toISOString().slice(0, 10) },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const completedTask = response.data;
    return completedTask;
  },
  removeTask: async function (taskToRemove, accessToken) {
    if (!taskToRemove.id) {
      throw new Error("task has to have an id to be deleted");
    }
    await axios.delete(`${BASE_URL}/${taskToRemove.id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },
  // Full-text search Add q GET /posts?q=internet -> dokumentacja json-server
  getTasksByFullTextSearch: async function (searchQuery, accessToken) {
    const response = await axios.get(`${BASE_URL}/?q=${searchQuery}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const tasks = response.data;
    return tasks;
  },
};

export default AxiosTasksAPI;
