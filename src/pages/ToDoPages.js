import React, { useState } from "react";
import Container from "react-bootstrap/Container";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      if (isEditing) {
        // Update the task if in editing mode
        const updatedTasks = tasks.map((task, index) =>
          index === currentTaskIndex ? newTask : task
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentTaskIndex(null);
      } else {
        // Add a new task
        setTasks([...tasks, newTask]);
      }
      setNewTask("");
    }
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">To-Do List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="form-control"
          placeholder="Enter a new task"
        />
        <button className="btn btn-primary" onClick={addTask}>
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task}
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => editTask(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
