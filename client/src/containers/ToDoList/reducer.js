import actions from './types';

export default function (state = { message: 'Hello World!' }, action) {
  switch (action.type) {
    case actions.CHANGE_INITIAL_STATE:
      return action.payload;

    default: return state;
  }
}