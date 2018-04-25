import { CHANGE_INITIAL_STATE } from '../types';

export default function (state = { currentMessage: 'Hello World!' }, action) {
  switch (action.type) {
    case CHANGE_INITIAL_STATE:
      return { 
        ...state, 
        currentMessage: action.payload.newState 
      };

    default: return state;
  }
}