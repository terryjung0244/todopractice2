import React from 'react';
import './App.css';
import CreateTodo from 'components/createTodo/CreateTodo';
import ShowTodo from 'components/showTodo/ShowTodo';
import SelectTodo from 'components/selectTodo/SelectTodo';

const App = () => {
  return (
    <div className="appMain">
      <div className="appSub">
        <CreateTodo />
        <SelectTodo />
        <ShowTodo />
      </div>
    </div>
  );
};

export default App;
