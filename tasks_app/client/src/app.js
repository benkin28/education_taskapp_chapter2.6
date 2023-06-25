import TaskList from "./task-list";
import React, { KeyboardEvent } from "react";
import Costumdiv from "./costumdiv";
import ReactDOM from "react-dom";

const App = () => {
  const [tasks, setTasks] = React.useState([]);
  const [inputsum, setInputsum] = React.useState("");
  const [inputtext, setInputtext] = React.useState("");

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      setTasks();
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("hi");
    setTasks(tasks.filter((item) => item.key !== e.target.handlekey));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if (inputsum.length !== 0 && inputtext.length !== 0)
    setTasks([
      ...tasks,
      {
        sum: inputsum,
        text: inputtext,
      },
    ]);
  };

  const handleChangesum = (e) => {
    setInputsum(e.target.value);
  };

  const handleChangetext = (e) => {
    setInputtext(e.target.value);
    if (e.key == "Enter") {
      handleenter;
    }
  };

  const handleenter = (e) => {
    if (e.key === "enter") {
      handleSubmit(e);
    }
  };

  return (
    <div
      id="app"
      tasks={tasks}
      //onKeyDown={onKeyDown}
      handleSubmit={handleSubmit}
    >
      <h1>Tasks</h1>
      <TaskList
        tasks={tasks}
        handleenter={handleenter}
        handleChangesum={handleChangesum}
        handleChangetext={handleChangetext}
        handleSubmit={handleSubmit}
        onKeyDown={onKeyDown}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
