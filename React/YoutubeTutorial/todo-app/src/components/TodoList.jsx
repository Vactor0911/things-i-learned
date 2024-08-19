import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    setTasks((t) => [...t, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index <= 0) {
      return;
    }

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  };

  const moveTaskDown = (index) => {
    if (index >= tasks.length - 1) {
      return;
    }

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="todo">
        <h1>TODO List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="btn-add" onClick={addTask}>
            Add
          </button>
        </div>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="btn-delete" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="btn-move" onClick={() => moveTaskUp(index)}>
              🔼
            </button>
            <button className="btn-move" onClick={() => moveTaskDown(index)}>
              🔽
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default TodoList;
