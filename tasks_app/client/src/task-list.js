import Task from "./task";
import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const TaskList = ({
  tasks,
  handleEnter,
  handleChangesum,
  handleChangetext,
  handleSubmit,
  handleDelete
}) => {
  return (
    <div id="taskList" onKeyDown={handleEnter}>
      {tasks.map(
        ({ sum, text }, index) => (
          console.log(tasks),
          (<Task key={index} summary={sum} ID={index} description={text} tasks={tasks} handleDelete={handleDelete}></Task>)
        )
      )}
      <form onSubmit={handleSubmit} onKeyDown={handleEnter}>
        <label htmlFor="summary">Summary:</label>
        <input type="text" id="summary" onChange={handleChangesum} />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea id="description" onChange={handleChangetext} />
        <br />
        <button
          type="submit"
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              return handleSubmit;
            }
          }}
        >
          Add task
        </button>
      </form>
    </div>
  );
};

export default TaskList;
