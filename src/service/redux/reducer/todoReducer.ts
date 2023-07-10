import { Reducer } from 'redux';
import { TodoReducerState } from './todo.interface';
import { produce } from 'immer';
import { TodoActionsType } from '../action/todo.interface';

import { TODO_CONST_ACTIONS } from 'service/const/constAction';
import { TodoType } from 'service/model/todo';

const {
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SEND_EACH_ID_TODO,
  SELECT_COMPLETE_TODO,
  SELECT_INCOMPLETE_TODO,
} = TODO_CONST_ACTIONS;

const initialState: TodoReducerState = {
  todoList: [],
  selectedIdList: [],
};

export const todoReducer: Reducer<TodoReducerState, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType,
): TodoReducerState => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CREATE_TODO:
        draft.todoList.push(action.payload);
        break;

      case SEND_EACH_ID_TODO:
        const index = draft.selectedIdList.indexOf(action.payload);

        if (index === -1) {
          draft.selectedIdList.push(action.payload);
        } else {
          draft.selectedIdList.splice(index, 1);
        }

        break;

      case DELETE_TODO:
        draft.selectedIdList.forEach((id: string) => {
          const indexResulForDelete = draft.todoList.findIndex((todo: TodoType) => id === todo.id);
          if (indexResulForDelete > -1) {
            draft.todoList.splice(indexResulForDelete, 1);
          }
          draft.selectedIdList = [];
        });
        break;

      case UPDATE_TODO:
        const { id, title, date } = action.payload;
        const indexResultForUpdate = draft.todoList.findIndex((todo: TodoType) => todo.id === id);
        console.log(indexResultForUpdate);
        draft.todoList[indexResultForUpdate].title = title;
        draft.todoList[indexResultForUpdate].date = date;
        draft.selectedIdList = [];
        break;

      case SELECT_COMPLETE_TODO:
        const resultForComplete = draft.todoList.map((todo: TodoType) => {
          if (draft.selectedIdList.includes(todo.id)) {
            return { ...todo, isDone: true };
          } else {
            return { ...todo };
          }
        });
        draft.todoList = resultForComplete;
        break;

      case SELECT_INCOMPLETE_TODO:
        const resultForInComplete = draft.todoList.map((todo: TodoType) => {
          if (draft.selectedIdList.includes(todo.id)) {
            return { ...todo, isDone: false };
          } else {
            return { ...todo };
          }
        });
        draft.todoList = resultForInComplete;
        break;

      default:
        return state;
    }
  });
};
