import { combineReducers } from 'redux';
import initialState from './containers/InitialState/reducer';

export default combineReducers({
   initialState: initialState,
});
