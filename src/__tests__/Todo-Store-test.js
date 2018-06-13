import React                        from 'react';
import TodoStore                    from '../data/TodoStore';
import TodoActionTypes              from '../data/TodoActionTypes';

describe('TodoStore', () => {
  let state, todos, dispatch, addTodos;
  beforeEach(() => {

    state = TodoStore.getInitialState();

    todos = () => Array.from(state.values()).map(todo => ({
      text: todo.text,
      status: !!todo.status,
    }));

    dispatch = (action) => {
      state = TodoStore.reduce(state, action);
    };
  });

  it('can add multiple todos', () => {
    dispatch({
      type: TodoActionTypes.ADD_TODO,
      text: 'test0',
      payload:{
        data:{
          status:false,
          text: 'test0',
          id:5
        }
      }
    });

    expect(todos()).toEqual([
      {text: 'test0', status: false},
    ]);

    dispatch({
      type: TodoActionTypes.ADD_TODO,
      text: 'test1',
      payload:{
        data:{
          status:false,
          text: 'test1',
          id:6
        }
      }
    });

    expect(todos()).toEqual([
      {text: 'test0', status: false},
      {text: 'test1', status: false},
    ]);
  });

  it('can get multiple todos', () => {

    dispatch({
      type: TodoActionTypes.GET_API_TODOS,
      payload:{
        data:[
          {
            status:false,
            text: 'test2',
            id:7
          },
          {
            status:false,
            text: 'test3',
            id:8
          },
          {
            status:false,
            text: 'test4',
            id:9
          }
        ]
      }
    });

    expect(todos()).toEqual([
      {text: 'test2', status: false},
      {text: 'test3', status: false},
      {text: 'test4', status: false}
    ]);

  });

  it('can delete todos', () => {

    dispatch({
      type: TodoActionTypes.ADD_TODO,
      text: 'test10',
      payload:{
        data:{
          status:false,
          text: 'test10',
          id:10
        }
      }
    });

    expect(todos()).toEqual([
      {text: 'test10', status: false},
    ]);

    dispatch({
      type: TodoActionTypes.DELETE_TODO,
      id:10
    });

    expect(todos()).toEqual([]);

  });
  it('default', () => {

    dispatch({
      type: "ADD_ODO",
      text: 'test10',
      payload:{
        data:{
          status:false,
          text: 'test10',
          id:10
        }
      }
    });

    expect(todos()).toEqual([]);

  });
});
