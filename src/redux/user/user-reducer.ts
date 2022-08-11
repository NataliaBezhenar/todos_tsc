import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

interface IUserAction {
  type: "user/login";
  payload: { name: string; isLoggedIn: boolean };
}
interface IUser {
  username: {
    name: string;
    isLoggedIn: boolean;
  };
}

const initialState: IUser = {
  username: {
    name: "",
    isLoggedIn: false,
  },
};

const username = createReducer(initialState, {
  "user/login": (state: {}, action: IUserAction) => action.payload,
});

export default combineReducers({ username });
