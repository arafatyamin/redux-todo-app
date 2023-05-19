const initialState = [];

const taskReducer = (state = initialState, action) => {
  console.log("state",...state,"action",action)
    switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.payload.id, text: action.payload.text, status: "todo" }];
    case 'TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, status: "todo" }
          : todo
      );
    case 'ONGOING':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, status: "ongoing" }
          : todo
      );
    case 'COMPLETED':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, status: "completed" }
          : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);

    // case 'REMAINING_TODO':
    //   return action.payload.status !== "" ? state.filter(todo => todo.status == action.payload.status): state;
      
    default:
      return state;
  }
};

export default taskReducer;
