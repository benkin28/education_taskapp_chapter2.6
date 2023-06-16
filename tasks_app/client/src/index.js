
const TaskList = ({ tasks }) => {
  return (
    <div id="taskList">
      {tasks.map(({ summary, description }) => (
        <p>{`${summary}: ${description}`}</p>
      ))}
    </div>
  );
};

const tasks = [
  {
    summary: 'Read the MERN book',
    description: 'Read and understand the MERN book.',
  },
  {
    summary: 'Write a website',
    description: 'Create a new and cool website.',
  },
];

const app = (
  <div id="app">
    <h1>Tasks</h1>
    <TaskList tasks={tasks} />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

