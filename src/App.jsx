import React from "react";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <>
      <div className="container mt-5">
          <div className="row">
              <div className="col-12">
                  <div className="">
                    <h1 className="text-center">React To-Do List</h1>
                    <TodoApp />
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default App;