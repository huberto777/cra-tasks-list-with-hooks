import axios from 'axios';

const BASE_URL = 'http://localhost:5000/tasks';
const AxiosTasksAPI = {
  async getAllTasks(accessToken) {
    const response = await axios.get(`${BASE_URL}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const tasks = response.data;
    return tasks;
  },
  async addTask(taskToAdd, accessToken) {
    const response = await axios.post(`${BASE_URL}`, taskToAdd, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const addedTask = response.data;
    return addedTask;
  },
  async replaceTask(taskToReplace, accessToken) {
    if (!taskToReplace.id) {
      throw new Error('task has to have an id to be updated');
    }
    const response = await axios.put(`${BASE_URL}/${taskToReplace.id}`, taskToReplace, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const replacedTask = await response.data;
    return replacedTask;
  },

  async finishTask(taskToFinish, accessToken) {
    if (!taskToFinish.id) {
      throw new Error('task has to have an id to be finished');
    }

    const response = await axios.patch(
      `${BASE_URL}/${taskToFinish.id}`,
      { done: true, finishDate: new Date().toISOString().slice(0, 10) },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );
    const completedTask = response.data;
    return completedTask;
  },
  async removeTask(taskToRemove, accessToken) {
    if (!taskToRemove.id) {
      throw new Error('task has to have an id to be deleted');
    }
    await axios.delete(`${BASE_URL}/${taskToRemove.id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },
  // Full-text search Add q GET /posts?q=internet -> dokumentacja json-server
  async getTasksByFullTextSearch(searchQuery, accessToken) {
    const response = await axios.get(`${BASE_URL}/?q=${searchQuery}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const tasks = response.data;
    return tasks;
  },
};

export default AxiosTasksAPI;
