import { useState } from "react";
import "./ToDo.css";

export default function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function addNewTask(taskText) {
    const id = Math.random();
    const newTask = {
      id: id,
      taskText: taskText,
      complete: false
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  }
  function removeTask(taskId) {
    const remTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(remTasks);
  }

  const toggleTaskComplete = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.complete = !task.complete;
        return task;
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  };

  return (
    <div className="todo">
      <input
        type="text"
        placeholder="Please Enter Task..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          addNewTask(inputValue);
        }}
      >
        Add Task
      </button>
      <div className="list">
        <h2>ToDo task ({tasks.length})</h2>
        {tasks.map((task) => (
          <div
            className={task.complete ? "list-item completed" : "list-item"}
            key={task.id}
            onClick={() => toggleTaskComplete(task.id)}
          >
            <button onClick={() => removeTask(task.id)}>x</button>
            {task.taskText}
          </div>
        ))}
      </div>
    </div>
  );
}
