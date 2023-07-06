import { Reducer } from 'redux';
import { TodoReducerState } from './todo.interface';
import { produce } from 'immer';
import { TodoActionsType } from '../action/todo.interface';

const initialState: TodoReducerState = {
  todoList: [],
};

export const todoReducer: Reducer<TodoReducerState, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType,
): TodoReducerState => {
  return produce(state, (draft) => {
    switch (action.type) {
      default:
        return state;
    }
  });
};
