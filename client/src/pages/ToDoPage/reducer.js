import {
  FETCH_TODOS,
  CREATE_TODO,
  DELETE_TODO } from '../../types';
  
export default function (state = { items: [], initialLoad: true }, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        items: action.payload,
        initialLoad: false
      };

    case CREATE_TODO:
      return {
        ...state,
        items: [ ...state.items, action.payload],
      };

    default: return state;
  }
}
