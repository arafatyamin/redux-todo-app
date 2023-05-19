import { createStore } from 'redux';
import todoReducer from './reducers/taskReducer';

// Load todos from local storage
const persistedState = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];

const store = createStore(todoReducer, persistedState);

// Save todos to local storage on every state change
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('todos', JSON.stringify(state));
});

export default store;


