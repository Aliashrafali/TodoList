import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <table className="w-100 table table-bordered">
                        <thead>
                            <tr className="bg-gray-200">
                            <th className="px-3 py-2">Sno</th>
                            <th className="px-3 py-2">Task</th>
                            <th className="px-3 py-2">Status</th>
                            <th className="px-3 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-4 text-gray-500">No tasks found</td>
                            </tr>
                            ) : (
                            todos.map((todo, index) => (
                                <tr key={todo.id} className="border-b hover:bg-gray-50">
                                <td className="px-3 py-2">{index + 1}</td>
                                <td className={`px-3 py-2 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                                    {todo.text}
                                </td>
                                <td className="px-3 py-2">
                                    <button
                                        onClick={() => toggleComplete(todo.id)}
                                        className={`px-2 py-1 rounded btn btn-warning text-white ${
                                            todo.completed ? 'bg-green-600' : 'bg-yellow-500'
                                        }`}
                                        >
                                        {todo.completed ? 'Completed' : 'Pending'}
                                    </button>
                                </td>
                                <td className="px-3 py-2">
                                    <button
                                    onClick={() => deleteTodo(todo.id)}
                                        className="px-2 py-1 rounded btn btn-danger text-white hover:bg-red-600"
                                    >
                                    Delete
                                    </button>
                                </td>
                                </tr>
                            ))
                            )}
                        </tbody>
                        </table>
                </div>
            </div>
        </div>
    </>
  );
};

export default TodoList;