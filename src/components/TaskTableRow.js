import React from "react";

function TaskTableRow(props) {
  const { name, done, finishDate, priority, date } = props.task;
  const isFinished = done;
  let style = {};
  if (done) {
    style.textDecoration = "line-through";
    style.backgroundColor = "orange";
  }
  if (priority) {
    style.color = "red";
  }
  return (
    <tr style={style}>
      <td>{props.index + 1}</td>
      <td>{name}</td>
      <td>{date}</td>
      <td>{finishDate}</td>
      <td>
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={props.onDone}
          disabled={isFinished}
        >
          finish
        </button>
      </td>
      <td>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={props.onEdit}
          disabled={isFinished}
        >
          edit
        </button>
      </td>
      <td>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={props.onDelete}
        >
          delete
        </button>
      </td>
    </tr>
  );
}
export default TaskTableRow;
