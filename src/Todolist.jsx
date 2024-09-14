import React, { useState } from 'react';

function Todolist() {

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim()) {
      setTask([...task, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTask(task.filter((_, i) => i !== index));
  }

  function moveUp(index) {
    if (index === 0) return;
    const newTaskList = [...task];
    const temp = newTaskList[index];
    newTaskList[index] = newTaskList[index - 1];
    newTaskList[index - 1] = temp;
    setTask(newTaskList);
  }

  function moveDown(index) {
    if (index === task.length - 1) return;
    const newTaskList = [...task];
    const temp = newTaskList[index];
    newTaskList[index] = newTaskList[index + 1];
    newTaskList[index + 1] = temp;
    setTask(newTaskList);
  }

  return (
    <>
      <div className="todo-container text-center bg-gray-300 py-12 px-24 mt-24 rounded-lg shadow-md">
        <h1 className="todo-title text-6xl mb-12">Todo List</h1>

        <div className="todo-input-container mb-12">
          <input
            type="text"
            value={newTask}
            onChange={handleInput}
            placeholder="Add a new task"
            className="todo-input text-xl p-4 mb-6 border rounded-lg w-1/3 bg-purple-100 shadow-lg focus:outline-none"
          />
          <button onClick={addTask} className="add-btn bg-green-500 text-white text-xl font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600">
            Add Task
          </button>
        </div>

        <ul className="todo-list flex flex-col items-center space-y-4">
          {task.map((t, index) => (
            <li key={index} className="todo-item flex items-center justify-between p-4 mb-2 border rounded-lg bg-red-400 w-1/2 shadow-lg">
              <span className="todo-task text-white text-xl flex-grow">{t}</span>
              <button onClick={() => deleteTask(index)} className="todo-btn bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded-lg hover:bg-blue-700 mx-1">🗑️</button>
              <button onClick={() => moveUp(index)} className="todo-btn bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded-lg hover:bg-blue-700 mx-1">👆</button>
              <button onClick={() => moveDown(index)} className="todo-btn bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded-lg hover:bg-blue-700 mx-1">👇</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todolist;
