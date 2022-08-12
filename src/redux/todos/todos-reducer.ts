import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./todos-actions";

type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

const items = createReducer([], {
  [actions.addTodo]: (
    state: [],
    action: { type: "todos/add"; payload: TodoType }
  ) => [...state, action.payload],
  [actions.deleteTodo]: (
    state: [],
    action: { type: "todos/delete"; payload: number }
  ) => state.filter(({ id }) => id !== action.payload),
  [actions.toggleCompleted]: (
    state: [],
    action: { type: "todos/toggleCompleted"; payload: number }
  ) =>
    state.map((todo: TodoType) =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo
    ),
  [actions.editTodo]: (
    state: [],
    action: { type: "todos/editTodo"; payload: { id: number; message: string } }
  ) => {
    state.map((todo: TodoType) => {
      if (todo.id === action.payload.id) {
        todo.text = action.payload.message;
        return todo;
      }
      return todo;
    });
  },
});

interface IFiterAction {
  type: "todos/changeFilter";
  payload: string;
}

const filter = createReducer("", {
  [actions.changeFilter]: (state: string, action: IFiterAction) =>
    action.payload,
});

export default combineReducers({ items, filter });
