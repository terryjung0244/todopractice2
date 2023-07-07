import React from 'react';
import './SelectTodo.css';
import { useAppSelector } from 'service/store';

const SelectTodo = () => {
  const { todoList } = useAppSelector((state) => state.todoReducer);

  console.log(todoList);
  return (
    <div className="selectMain">
      {todoList.length > 0 && (
        <select className="select">
          <option>Select</option>
          <option>Completed</option>
          <option>Incompleted</option>
        </select>
      )}
    </div>
  );
};

export default SelectTodo;
