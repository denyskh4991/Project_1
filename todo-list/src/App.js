import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
      <div className="App">
        <h1>Todo List</h1>
        <div>
          <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter a new task"
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
              <li
                  key={index}
                  className={todo.completed ? 'completed' : ''}
                  onClick={() => toggleTodo(index)}
                  style={{ cursor: 'pointer' }}
              >
                {todo.text}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;