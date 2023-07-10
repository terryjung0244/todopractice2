import React, { useState } from 'react';
import './ShowTodo.css';
import { useAppDispatch, useAppSelector } from 'service/store';
import { TodoType } from 'service/model/todo';
import {
  deleteTodoAction,
  sendEachTodoIdAction,
  updateTodoAction,
} from 'service/redux/action/todoAction';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { CreateInputType } from 'components/createTodo/CreateTodo';
import { format } from 'date-fns';

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList, selectedIdList } = useAppSelector((state) => state.todoReducer);
  const [open, setOpen] = useState<boolean>(false);
  const [createInput, setCreateInput] = useState<CreateInputType>({
    title: '',
  });

  const inputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateInput({ ...createInput, [e.target.name]: e.target.value });
  };

  const deleteTodo = () => {
    dispatch(deleteTodoAction());
  };

  const updateTodo = () => {
    setOpen(true);
  };

  const showTodo = (selectedId: string) => {
    dispatch(sendEachTodoIdAction(selectedId));
  };

  const newUpdateButton = () => {
    console.log(selectedIdList);
    dispatch(
      updateTodoAction({
        ...createInput,
        id: selectedIdList[0],
        date: format(new Date(), 'p, eeee'),
      }),
    );
  };

  console.log(selectedIdList);

  return (
    <div className="showTodoMain">
      {todoList.map((todo: TodoType) => {
        return (
          <div key={todo.id}>
            {todo.id.length > 5 && (
              <div
                className="todoListContainer"
                onClick={() => showTodo(todo.id)}
                style={{ backgroundColor: selectedIdList.includes(todo.id) ? '#BFC8EA' : 'unset' }}
              >
                <div>
                  <div>
                    {/* <input className="checkBoxContainer" type="checkbox" checked={false} />
                    {todo.id} */}
                  </div>
                  <div style={{ textDecoration: todo.isDone ? 'line-through' : 'unset' }}>
                    {todo.title}
                  </div>
                  <div>{todo.date}</div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div className="button" onClick={deleteTodo}>
                    Delete
                  </div>
                  {todo.isDone ? null : (
                    <div style={{ marginLeft: '10px' }} className="button" onClick={updateTodo}>
                      Update
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
      <Modal
        aria-labelledby="close-modal-title"
        open={open}
        onClose={(_event: React.MouseEvent<HTMLButtonElement>, reason: string) => {
          setOpen(false);
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            minWidth: 450,
            borderRadius: 'md',
            p: 5,
          }}
        >
          <ModalClose variant="outlined" />
          <Typography
            component="h2"
            id="close-modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
          >
            <div className="updateAndButtonContainer">
              <input
                className="updateInputContainer"
                name="title"
                value={createInput.title}
                onChange={inputTodo}
                placeholder="Update Title"
              />
              <button className="updateButton" onClick={newUpdateButton}>
                Update
              </button>
            </div>
          </Typography>
        </Sheet>
      </Modal>
    </div>
  );
};

export default ShowTodo;
