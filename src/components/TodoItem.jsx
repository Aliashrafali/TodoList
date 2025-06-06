import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="flex justify-between items-center border-b py-2">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;