import { v4 as uuidv4 } from 'uuid';
import { wait } from './wait';

const tasks = [
  {
    id: 1,
    date: '2020-02-03',
    done: false,
    finishDate: null,
    name: 'nauczyć się js es 6',
    priority: false,
  },
  {
    id: 2,
    date: '2020-02-04',
    done: false,
    finishDate: null,
    name: 'nauczyć się biblioteki axios',
    priority: true,
  },
  {
    id: 3,
    date: '2020-03-03',
    done: false,
    finishDate: null,
    name: 'zainstalować linuxa',
    priority: false,
  },
  {
    id: 4,
    date: '2020-04-09',
    done: false,
    finishDate: null,
    name: 'zrobić api w laravelu',
    priority: false,
  },
];

function findIndexByAnId(id) {
  const result = tasks.findIndex((task) => task.id === id);
  if (result < 0) {
    throw new Error('task o podanym id nie istnieje');
  }
  return result;
}

const FakeTasksApi = {
  async getAllTasks() {
    await wait(200);
    return [...tasks];
  },
  async addTask(taskToAdd) {
    await wait(200);
    const addedTask = { id: uuidv4(), ...taskToAdd };
    tasks.push(addedTask);

    return addedTask;
  },
  async replaceTask(taskToReplace) {
    await wait(200);
    if (!taskToReplace.id) {
      throw new Error('task has to have an id to be updated');
    }
    const index = findIndexByAnId(taskToReplace.id);
    const replacedTask = { ...taskToReplace };
    tasks[index] = replacedTask;
    return replacedTask;
  },
  async finishTask(taskToFinish) {
    await wait(200);
    if (!taskToFinish.id) {
      throw new Error('task has to have an id to be finished');
    }

    const finishedTask = {
      ...taskToFinish,
      done: true,
      finishDate: new Date().toISOString().slice(0, 10),
    };
    const index = findIndexByAnId(taskToFinish.id);
    tasks[index] = finishedTask;
    return finishedTask;
  },
  async removeTask(taskToRemove) {
    await wait(200);
    if (!taskToRemove.id) {
      throw new Error('task has to have an id to be deleted');
    }

    const index = findIndexByAnId(taskToRemove.id);
    tasks.splice(index, 1);
  },
  async getTasksByFullTextSearch(searchQuery) {
    await wait(200);
    return searchQuery;
  },
};

export default FakeTasksApi;
