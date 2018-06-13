import Immutable from 'immutable';

const Todo = Immutable.Record({
  id: +"",
  text: '',
  status: false
});

export default Todo;
