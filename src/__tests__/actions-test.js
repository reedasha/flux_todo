jest.mock('../data/TodoDispatcher')
jest.mock('../data/TodoStore')
jest.autoMockOff();
import React                        from 'react';
import axios                        from 'axios';
import MockAdapter                  from 'axios-mock-adapter';
import Actions                      from '../data/TodoActions'
import TodoDispatcher               from '../data/TodoDispatcher'

describe('Actions', () => {

  beforeEach(() => {
    const mock = new MockAdapter(axios)
    mock.onPost('http://localhost:3001/todos').reply(201,{
        text: 'test0',
        status: false
      });
    mock.onGet('http://localhost:3001/todos').reply(201,{
        text: 'test0',
        status: false
      });
    mock.onAny('http://localhost:3001/todos/'+ 3 ).reply(204,'ok');
  })

  it('Test for action addTodo', () => {
      Actions.addTodo('test0');
      expect(TodoDispatcher.dispatch.mock.calls.length).toBe(0);
      TodoDispatcher.dispatch.mockClear()
  });

  it('Test for action getTodo', () => {
       Actions.getApiTodos();
      expect(TodoDispatcher.dispatch.mock.calls[0][0].type).toEqual('ADD_TODO')
      TodoDispatcher.dispatch.mockClear()
  });

  it('Test for action deleteTodo', () => {
      Actions.deleteTodo(3);
      expect(TodoDispatcher.dispatch.mock.calls[0][0].payload.config.method).toEqual('get')
      TodoDispatcher.dispatch.mockClear()
  });
});
