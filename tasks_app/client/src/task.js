import React from 'react'
import ReactDOM from 'react-dom'
const Task = ({ summary, description }) => {
    return <p>{`${summary}: ${description}`}</p>;
  };
  
  export default Task;
  