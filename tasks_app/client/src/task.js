import React from "react";
import ReactDOM from "react-dom";
const Task = ({ summary, description, ID, tasks, handleDelete }) => {
  return (
    <p>
      {`${summary}: ${description}`}
      &nbsp;
      <button handlekey={ID} onClick={handleDelete} type="submit">
        delete
      </button>
    </p>
  );
};

export default Task;
