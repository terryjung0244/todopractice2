import { AnyAction } from '@reduxjs/toolkit';
import { TODO_CONST_ACTIONS } from 'service/const/constAction';
import { SELECT_CONST } from 'service/const/selectConst';
import { TodoType } from 'service/model/todo';

const { CREATE_TODO, DELETE_TODO, UPDATE_TODO, SEND_EACH_ID_TODO } = TODO_CONST_ACTIONS;
const { SELECT_COMPLETED, SELECT_INCOMPLETED } = SELECT_CONST;

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

export interface SelectOptionForCompleteReturnType {
  type: typeof SELECT_COMPLETED;
  payload: null;
}

export interface SelectOptionForInCompleteReturnType {
  type: typeof SELECT_COMPLETED;
  payload: null;
}

export type TodoActionsType =
  | CreateTodoActionReturnType
  | DeleteTodoActionReturnType
  | SendEachTodoIdActionReturnType
  | SendEachTodoIdActionReturnType
  | SelectOptionForCompleteReturnType
  | SelectOptionForInCompleteReturnType
  | AnyAction;
