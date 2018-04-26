import { combineReducers } from 'redux';
import initialState from './components/InitialState/reducer';

export default combineReducers({
   initialState: initialState,
});
