import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <>
        <div className='container'>
        <form onSubmit={handleSubmit} className="flex mb-4">
            <div className='row form'>
                <div className='col-12 col-lg-10 col-md-12'>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="flex-grow border px-2 py-1 rounded-l form-control"
                        placeholder="Add new task"
                    />
                </div>
                <div className='col-lg-2 col-md-12 col-sm-12 todo-form'>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-r btn btn-primary">
                        Add
                    </button>
                </div>
            </div>
            </form>
        </div>
    </>
  );
};

export default AddTodo;