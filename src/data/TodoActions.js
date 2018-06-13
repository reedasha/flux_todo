import TodoActionTypes    from './TodoActionTypes';
import TodoDispatcher     from './TodoDispatcher';
import axios              from 'axios';

const Actions = {

  addTodo(text) {
    axios({
        method: 'POST',
        url: 'http://localhost:3001/todos',
        data: {
          text: text,
          status: false
        }
      })
      .then((response) => {
        TodoDispatcher.dispatch({
          type: TodoActionTypes.ADD_TODO,
          payload: response,
          text,
        });
      })
  },
  getApiTodos() {
    axios({
        method: 'GET',
        url: 'http://localhost:3001/todos',
      })
      .then((response) => {
        TodoDispatcher.dispatch({
          type: TodoActionTypes.GET_API_TODOS,
          payload: response,
        });
      })
  },

  deleteTodo(id) {
    axios.delete('http://localhost:3001/todos/'+ id)
    .then((response) =>{
      TodoDispatcher.dispatch({
        type: TodoActionTypes.DELETE_TODO,
        id,
      });
    })
  },


};

export default Actions;
