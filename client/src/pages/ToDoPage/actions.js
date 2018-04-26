import { 
  FETCH_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO } from '../../types';

const actions = {
  fetchToDos() {
    return function getItems(dispatch) {
      fetch('/api/fetch')
        .then(res => {
          return res.json();
        })
        .then(items => {
          console.log(items);
        })
        .catch(err => {
          console.log(err);
        })
    }
  },

  createToDo() {

  },

  updateToDo() {

  },

  deleteToDo() {

  }
};

export default actions;