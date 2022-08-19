import { connect } from "react-redux";
import Todo from "../Todo";
import todosActions from "../../redux/todos/todos-actions";
import styles from "./TodoList.module.css";
import { RootState, AppDispatch } from "../../redux/store";
import { TodoType } from "../../redux/types/todoType";
import { ReactElement } from "react";

interface ITodoList {
  todos: TodoType[];
  onDeleteTodo: Function;
  onToggleCompleted: Function;
  onEditTodo: Function;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  onDeleteTodo,
  onToggleCompleted,
}) => {
  let todosContent: ReactElement[] = [
    <p key={Math.random()} className={styles["todoList__noTodosFoundText"]}>
      No todos found
    </p>,
  ];
  if (todos.length > 0) {
    todosContent = todos.map(({ id, text, completed }) => {
      let style = "";
      if (completed) {
        style = "todoList__item--completed";
      }
      return (
        <li key={id} className={`${styles.todoList__item} ${styles[style]} }`}>
          <Todo
            text={text}
            completed={completed}
            id={id}
            onToggleCompleted={() => onToggleCompleted(id)}
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      );
    });
  }

  return <ul className={styles.todoList}>{todosContent}</ul>;
};

const getVisibleTodos = (allTodos: TodoType[], filter: string) => {
  switch (filter) {
    case "incomplete":
      return allTodos.filter((todo) => !todo.completed);
    case "complete":
      return allTodos.filter((todo) => todo.completed);
    default:
      return allTodos;
  }
};

const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodos(state.todos.items, state.todos.filter),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onDeleteTodo: (id: number) => dispatch(todosActions.deleteTodo(id)),
  onToggleCompleted: (id: number) => dispatch(todosActions.toggleCompleted(id)),
  onEditTodo: (id: number) => dispatch(todosActions.editTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
