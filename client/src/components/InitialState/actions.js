import { CHANGE_INITIAL_STATE } from '../../types';

const actions = {
  toggleInitialState(currentState) {
    if(currentState === 'Hello World!') {
      return (dispatch) => {
        dispatch({
          type: CHANGE_INITIAL_STATE,
          payload: { newState: 'State Changed!' }
        });
      }
    } else {
      return (dispatch) => {
        dispatch({
          type: CHANGE_INITIAL_STATE,
          payload: { newState: 'Hello World!' }
        });
      }
    }
  }
};

export default actions;