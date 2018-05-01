import { combineReducers } from 'redux';
import initialState from './pages/HomePage/reducer';
import toDos from './pages/ToDoPage/reducer';

export default combineReducers({
   initialState: initialState,
   todos: toDos
});
