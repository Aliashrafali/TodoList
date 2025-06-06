import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center space-x-2 mb-4 li">
      {['all', 'completed', 'pending'].map(type => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-3 py-1 rounded btn btn-warning ${filter === type ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          style={{marginLeft:'12px'}}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filter;