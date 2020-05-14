import { uuid } from "uuidv4";
const initState = {
  todos: [
    {
      id: uuid(),
      name: "Go to the gym",
      complete: false,
    },
    {
      id: uuid(),
      name: "Do the laundry",
      complete: true,
    },
  ],
};

const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
