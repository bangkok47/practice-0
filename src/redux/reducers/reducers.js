import { ADD_TODO, DELETE_TODO } from '../actions/actionTypes';

const todo = [
  {
    id: 1,
    name: 'One',
  },
  {
    id: 2,
    name: 'Two',
  },
  {
    id: 3,
    name: 'Three',
  },
];

const reducers = (state = todo, action) => {
  switch (action.type) {
    case ADD_TODO:
      let addedTodo = [...state];
      addedTodo.push(action.payload);
      return addedTodo;
    case DELETE_TODO: {
      let newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    }
    default:
      return state;
  }
};

export default reducers;
