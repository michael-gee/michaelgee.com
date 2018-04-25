import types from './types';

const actions = {
  changeInitialState(newMessage) {
    const message = newMessage;

    return function changeInitialStateFunc(dispatch) {
      dispatch({
        type: types.CHANGE_INITIAL_STATE,
        payload: { message },
      });
    };
  },
};

export default actions;

