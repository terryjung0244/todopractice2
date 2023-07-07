import React, { useState } from 'react';
import './CreateTodo.css';
import { useAppDispatch } from 'service/store';
import { createTodoAction } from 'service/redux/action/todoAction';
import { getNanoid } from 'service/util/nanoid';
import { format } from 'date-fns';

export interface CreateInputType {
  title: string;
}

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const [alert, setAlert] = useState<boolean>(false);
  const [createInput, setCreateInput] = useState<CreateInputType>({
    title: '',
  });

  const inputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateInput({ ...createInput, [e.target.name]: e.target.value });
  };

  const createTodoInput = () => {
    const { title } = createInput;
    if (!title) {
      setAlert(true);
      return;
    }
    setAlert(false);
    dispatch(
      createTodoAction({
        ...createInput,
        id: getNanoid(),
        date: format(new Date(), 'p, eeee'),
      }),
    );
    setCreateInput({ ...createInput, title: '' });
  };

  return (
    <div className="inputAndButtonContainer">
      <div className="alertContainer">
        {alert && <div className="textArea">Alert! Create Your Task</div>}
      </div>
      <div className="inputAndButtonSub">
        <input
          className="input"
          name="title"
          value={createInput.title}
          placeholder="Title"
          onChange={inputTodo}
        />
        <button className="addTaskButton" onClick={createTodoInput}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
