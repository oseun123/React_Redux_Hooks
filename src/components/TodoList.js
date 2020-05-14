import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTodoAction,
  deleteTodoAction,
} from "../store/actions/todoActions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const toggleTodo = (id) => {
    dispatch(toggleTodoAction(id));
  };
  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.complete ? "complete" : null}>
            {" "}
            {todo.name}
          </span>
          <span className="delete-button" onClick={() => deleteTodo(todo.id)}>
            X
          </span>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
