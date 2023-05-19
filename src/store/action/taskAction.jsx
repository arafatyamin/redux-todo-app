export const AddTodo = todo => {
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
  export const Ongoing = todoId => {
    return {
      type: 'ONGOING',
      payload: { id: todoId },
    };
  };
  export const Completed = todoId => {
    return {
      type: 'COMPLETED',
      payload: { id: todoId },
    };
  };
  
  export const RemoveTodo = todoId => {
    return {
      type: 'REMOVE_TODO',
      payload: { id: todoId },
    };
  };
  