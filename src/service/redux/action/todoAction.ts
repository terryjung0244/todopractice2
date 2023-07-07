import { TODO_CONST_ACTIONS } from 'service/const/constAction';
import { TodoType } from 'service/model/todo';
import {
  CreateTodoActionReturnType,
  DeleteTodoActionReturnType,
  SendEachTodoIdActionReturnType,
  UpdateTodoActionReturnType,
} from './todo.interface';

const { CREATE_TODO, DELETE_TODO, UPDATE_TODO, SEND_EACH_ID_TODO } = TODO_CONST_ACTIONS;

export const createTodoAction = (createInput: TodoType): CreateTodoActionReturnType => {
  return {
    type: CREATE_TODO,
    payload: createInput,
  };
};

export const deleteTodoAction = (): DeleteTodoActionReturnType => {
  return {
    type: DELETE_TODO,
    payload: null,
  };
};

export const updateTodoAction = (newInput: TodoType): UpdateTodoActionReturnType => {
  return {
    type: UPDATE_TODO,
    payload: newInput,
  };
};
export const sendEachTodoIdAction = (selectedId: string): SendEachTodoIdActionReturnType => {
  return {
    type: SEND_EACH_ID_TODO,
    payload: selectedId,
  };
};
