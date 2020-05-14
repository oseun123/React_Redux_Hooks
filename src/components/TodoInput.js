import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/actions/todoActions";
import { uuid } from "uuidv4";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    dispatch(
      addTodoAction({
        id: uuid(),
        name: todo,
        complete: false,
      })
    );
    setTodo("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <button type="submit"> add</button>
      </div>
    </form>
  );
};
export default TodoInput;
