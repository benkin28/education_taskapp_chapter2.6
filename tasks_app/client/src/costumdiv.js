
const Costumdiv = ({ id, tasks, handleSubmit }) => {
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return <div id={id} onKeyDown={onKeyDown}></div>;
};

export default Costumdiv; 


