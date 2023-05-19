export const addTodo = todo => {
    return {
      type: 'ADD_TODO',
      payload: todo,
    };
  };
  
  export const Todo = todoId => {
    return {
      type: 'TODO',
      payload: { id: todoId },
    };
  };
  export const ONGOING = todoId => {
    return {
      type: 'ONGOING',
      payload: { id: todoId },
    };
  };
  export const COMPLETED = todoId => {
    return {
      type: 'COMPLETED',
      payload: { id: todoId },
    };
  };
  
  export const removeTodo = todoId => {
    return {
      type: 'REMOVE_TODO',
      payload: { id: todoId },
    };
  };
  