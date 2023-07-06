import React from 'react';
import './App.css';
import CreateTodo from 'components/createTodo/CreateTodo';

const App = () => {
  return (
    <div className="appMain">
      <div className="appSub">
        <CreateTodo />
      </div>
    </div>
  );
};

export default App;
