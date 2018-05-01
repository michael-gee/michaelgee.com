import { 
  FETCH_TODOS,
  CREATE_TODO,
  DELETE_TODO } from '../../types';

const actions = {
  fetchToDos() {
    return function getItems(dispatch) {
      fetch('/api/fetch')
        .then(res => res.json())
        .catch(err => console.log('Error: ', err))
        .then(items => {
          dispatch({
            type: FETCH_TODOS,
            payload: items
          });
        })
    }
  },

  createToDo(item) {
    return function createItem(dispatch) {
      fetch('/api/create', {
        method: 'POST',
        body: JSON.stringify({ todo: item }),
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        })
      })
      .then(res => res.json())
      .catch(err => console.log('Error: ', err))
      .then(res => {
        dispatch({
          type: CREATE_TODO,
          payload: res
        });
      })
    }
  },

  deleteToDo(itemID) {
    return function deleteItem(dispatch) {
      fetch('/api/delete', {
        method: 'DELETE',
        body: JSON.stringify({ todo: itemID }),
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        })
      })
    }
  }
};

export default actions;