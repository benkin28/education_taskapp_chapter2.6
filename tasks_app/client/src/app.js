import TaskList from './task-list';
import React from 'react'
import ReactDOM from 'react-dom'





const App = () => {
  const [tasks, setTasks] = React.useState([]);
  const [inputsum,setInputsum]=React.useState("")
  const [inputtext,setInputtext]=React.useState("")

  const handleSubmit = (e)=> {
    e.preventDefault();

    
    setTasks([
      ...tasks,
      {
        sum: inputsum,
        text: inputtext
      }]
    );
  }

  const handleChangesum=(e)=>{
    setInputsum(e.target.value)
  }

  const handleChangetext=(e)=>{
    setInputtext(e.target.value)
  }

  
  return (
    <div id="app">
      <h1>Tasks</h1>
      <TaskList tasks={tasks} handleChangesum={handleChangesum} handleChangetext={handleChangetext} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default App;
