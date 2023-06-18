import Task from './task';
import React from 'react'
import ReactDOM from 'react-dom'






const TaskList = ({ tasks, handleChangesum, handleChangetext, handleSubmit}) => {

  return (
    <div id="taskList">
      {tasks.map((task, index) => (
        console.log(tasks),
        <Task key={index} summary={task.sum} description={task.text} />
      ))}
        <form onSubmit={handleSubmit}>
        <label htmlFor="summary">Summary:</label>
        <input type="text" id="summary" onChange={handleChangesum} />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea id="description" onChange={handleChangetext}/>
        <br />
        <button type="submit" onSubmit={handleSubmit}>Add task</button>
        </form>

    </div>
  );
};

export default TaskList;
