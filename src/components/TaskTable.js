import React from 'react';
import TaskTableRow from './TaskTableRow';

function TaskTable({ tasks, del, done, edit, editMode, onUpdate, currentEditTask, cancelEdit }) {
  return (
    <table className="table table-info table-hover table-striped table-responsive{-sm|-md|-lg|-xl}">
      <thead>
        <tr>
          <th>#</th>
          <th>task name</th>
          <th>date</th>
          <th>edit / del</th>
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
            cancelEdit={cancelEdit}
            editMode={editMode}
            onUpdate={onUpdate}
            currentEditTask={currentEditTask}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TaskTable;
