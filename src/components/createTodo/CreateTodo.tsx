import React, { useState } from 'react';
import './CreateTodo.css';

export interface CreateInputType {
  title: string;
}

const CreateTodo = () => {
  const [createInput, setCreateInput] = useState<CreateInputType>({
    title: '',
  });

  const inputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateInput({ ...createInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="inputAndButtonContainer">
      <input
        className="input"
        name="title"
        value={createInput.title}
        placeholder="Title"
        onChange={inputTodo}
      />
      <button className="addTaskButton">
        <div className="addTaskText">Add Task</div>
      </button>
    </div>
  );
};

export default CreateTodo;
