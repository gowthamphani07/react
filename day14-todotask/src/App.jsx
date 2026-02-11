import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // ADD TASK
  function addTask() {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  // DELETE TASK
  function deleteTask(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  // TOGGLE COMPLETE
  function toggleComplete(id) {
    const updatedTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none"
            }}
          >
            {todo.text}

            <button onClick={() => toggleComplete(todo.id)}>
              ✓
            </button>

            <button onClick={() => deleteTask(todo.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
