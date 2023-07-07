import React from 'react';
import './SelectTodo.css';
import { useAppDispatch, useAppSelector } from 'service/store';
import { SELECT_CONST } from 'service/const/selectConst';
import {
  selectOptionForComplete,
  selectOptionForInComplete,
} from 'service/redux/action/todoAction';

const { SELECT_COMPLETED, SELECT_INCOMPLETED } = SELECT_CONST;

const SelectTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todoReducer);

  const selectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    switch (value) {
      case SELECT_COMPLETED:
        dispatch(selectOptionForComplete());
        break;

      case SELECT_INCOMPLETED:
        dispatch(selectOptionForInComplete());
        break;

      default:
        break;
    }
  };

  return (
    <div className="selectMain">
      {todoList.length > 0 && (
        <select className="select" onChange={selectOption}>
          <option>Select</option>
          <option value={SELECT_COMPLETED}>Completed</option>
          <option value={SELECT_INCOMPLETED}>Incompleted</option>
        </select>
      )}
    </div>
  );
};

export default SelectTodo;
