export const addTodoAction = (todo) => ({ type: "ADD_TODO", payload: todo });
export const toggleTodoAction = (id) => ({ type: "TOGGLE_TODO", payload: id });
export const deleteTodoAction = (id) => ({ type: "DELETE_TODO", payload: id });
