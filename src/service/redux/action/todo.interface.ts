import { AnyAction } from '@reduxjs/toolkit';
import { TODO_CONST_ACTIONS } from 'service/const/constAction';
import { TodoType } from 'service/model/todo';

const { CREATE_TODO, DELETE_TODO, UPDATE_TODO, SEND_EACH_ID_TODO } = TODO_CONST_ACTIONS;

export interface CreateTodoActionReturnType {
  type: typeof CREATE_TODO;
  payload: TodoType;
}

export interface DeleteTodoActionReturnType {
  type: typeof DELETE_TODO;
  payload: null;
}

export interface UpdateTodoActionReturnType {
  type: typeof UPDATE_TODO;
  payload: TodoType;
}

export interface SendEachTodoIdActionReturnType {
  type: typeof SEND_EACH_ID_TODO;
  payload: string;
}

export type TodoActionsType =
  | CreateTodoActionReturnType
  | DeleteTodoActionReturnType
  | SendEachTodoIdActionReturnType
  | SendEachTodoIdActionReturnType
  | AnyAction;
