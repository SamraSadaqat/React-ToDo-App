import React from 'react';
import Todoitem from './Todoitem';

const Todolist = ({ todos, onDelete, onToggle }) => {
  return (
    
    <div  className="todo-list">
      {todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default Todolist;