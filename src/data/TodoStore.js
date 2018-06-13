import {ReduceStore}      from 'flux/utils';
import TodoActionTypes    from './TodoActionTypes';
import TodoDispatcher     from './TodoDispatcher';
import {OrderedMap}       from 'immutable'
import Todo               from './Todo'


class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState(){
    return OrderedMap()
  }

  reduce(state, action) {
    const {payload} = action;
    let id;
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        return state.set(id = payload.data.id, new Todo({
          id,
          text:action.text,
          completed:false
        }));

      case TodoActionTypes.GET_API_TODOS:
        return OrderedMap(payload.data.map(x => [x.id, x]))

      case TodoActionTypes.DELETE_TODO:
        return state.delete(action.id)

      default:
       return state
    }
  }
}

export default new TodoStore();
