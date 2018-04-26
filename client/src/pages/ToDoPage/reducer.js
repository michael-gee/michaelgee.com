import {
  FETCH_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO } from '../../types';
  
export default function (state = { items: [] }, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      };

    default: return state;
  }
}
