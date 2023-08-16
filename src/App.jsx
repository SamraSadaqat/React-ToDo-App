import React, { useState } from 'react';
import './App.css';
import Todolist from './Components/todolist';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editedTodo, setEditedTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, isEditing: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const startEditing = (index) => {
    setEditedTodo(todos[index].text);
    setEditIndex(index);
  };

  const saveEdit = () => {
    if (editedTodo.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editIndex].text = editedTodo;
      updatedTodos[editIndex].isEditing = false;
      setTodos(updatedTodos);
      setEditIndex(-1);
    }
  };



  return (
    <div className="container">
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className="add" onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                <button className="edit" onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <div>
                  <button className="edit" onClick={() => startEditing(index)}>Edit</button>
                  <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default TodoApp;
