import React from 'react';
import TaskTableRow from './TaskTableRow';

function TaskTable({ tasks, del, done, edit }) {
  return (
    <table className="table table-info table-hover table-striped table-responsive{-sm|-md|-lg|-xl}">
      <thead>
        <tr>
          <th>#</th>
          <th>task name</th>
          <th>add task</th>
          <th>finish date</th>
          <th>ok</th>
          <th>edit</th>
          <th>del</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <TaskTableRow
            key={task.id}
            index={index}
            task={task}
            onDelete={() => del(task)}
            onDone={() => done(task)}
            onEdit={() => edit(task)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TaskTable;
