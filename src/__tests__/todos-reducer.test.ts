import todoActions from "../redux/todos/todos-actions";
import todosReducer from "../redux/todos/todos-reducer";
import { TodoType } from "../redux/types/todoType";

const testState: { items: TodoType[]; filter: string } = {
  items: [
    { id: 321, text: "ToDo 1", completed: false },
    { id: 111, text: "ToDo 2", completed: false },
    { id: 222, text: "ToDo 3", completed: true },
  ],
  filter: "",
};

describe("test todolist reducers", () => {
  test("remove todo", () => {
    expect(
      todosReducer(testState, { type: todoActions.deleteTodo, payload: 321 })
    ).toEqual({
      items: [
        { id: 111, text: "ToDo 2", completed: false },
        { id: 222, text: "ToDo 3", completed: true },
      ],
      filter: "",
    });
  });
  test("add todo", () => {
    const testId: number = Math.random();
    expect(
      todosReducer(testState, {
        type: todoActions.addTodo,
        payload: { id: testId, text: "test todo", completed: false },
      })
    ).toEqual({
      items: [
        { id: 321, text: "ToDo 1", completed: false },
        { id: 111, text: "ToDo 2", completed: false },
        { id: 222, text: "ToDo 3", completed: true },
        { id: testId, text: "test todo", completed: false },
      ],
      filter: "",
    });
  });
  test("toggle completed", () => {
    expect(
      todosReducer(testState, {
        type: todoActions.toggleCompleted,
        payload: 111,
      })
    ).toEqual({
      items: [
        { id: 321, text: "ToDo 1", completed: false },
        { id: 111, text: "ToDo 2", completed: true },
        { id: 222, text: "ToDo 3", completed: true },
      ],
      filter: "",
    });
  });
  test("edit todo", () => {
    expect(
      todosReducer(testState, {
        type: todoActions.editTodo,
        payload: { id: 222, message: "new test todo" },
      })
    ).toEqual({
      items: [
        { id: 321, text: "ToDo 1", completed: false },
        { id: 111, text: "ToDo 2", completed: false },
        { id: 222, text: "new test todo", completed: true },
      ],
      filter: "",
    });
  });
  test("filter todos", () => {
    expect(
      todosReducer(testState, {
        type: todoActions.changeFilter,
        payload: "incomplete",
      })
    ).toEqual({
      items: [
        { id: 321, text: "ToDo 1", completed: false },
        { id: 111, text: "ToDo 2", completed: false },
        { id: 222, text: "ToDo 3", completed: true },
      ],
      filter: "incomplete",
    });
  });
});

//     test("login", ()=>{
//         expect(todosReducer(currentState,{type: TodosActionTypes.ADD_LOGIN, payload: "user name"})).toEqual({
//                 todos: [
//                     {id: 1, title: "task", completed: true},
//                     {id: 2, title: "another task", completed: false},
//                     {id: 3, title: "one more task", completed: true},
//                 ],
//                 name: "user name",
//                 isLogin: true,
//                 selectedTodos: "all"
//             }
//         )
//     })

//
