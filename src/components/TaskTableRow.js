import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function TaskTableRow({ index, task, onDone, onEdit, onDelete }) {
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
      {/* {onEdit ? 'hvihi' : ''} */}
      <td>{index + 1}</td>
      <td onClick={onDone}>{name}</td>
      <td>{!done ? date : finishDate}</td>
      <td>
        <button
          className="btn btn-sm btn-outline-secondary mr-1"
          onClick={onEdit}
          disabled={isFinished}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
}
export default TaskTableRow;
