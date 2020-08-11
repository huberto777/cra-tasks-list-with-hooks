import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditTask from './EditTask';

function TaskTableRow({
  index,
  task,
  onDone,
  onEdit,
  onDelete,
  onUpdate,
  editMode,
  currentEditTask,
  cancelEdit,
}) {
  const { name, done, finishDate, priority, date } = task;
  const isFinished = done;
  const style = {};
  if (done) {
    style.textDecoration = 'line-through';
    style.backgroundColor = 'orange';
  }
  if (priority) {
    style.color = 'red';
  }

  return (
    <tr style={style}>
      {task.id === currentEditTask ? (
        <EditTask update={onUpdate} task={task} cancelEdit={cancelEdit} index={index} />
      ) : (
        <>
          <td>{index + 1}</td>
          <td onClick={onDone}>{name}</td>
          <td>{!done ? date : finishDate}</td>
          <td>
            <button
              className="btn btn-sm btn-outline-secondary mr-1"
              onClick={onEdit}
              disabled={isFinished || editMode}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={onDelete}
              disabled={editMode}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </td>{' '}
        </>
      )}
    </tr>
  );
}
export default TaskTableRow;
