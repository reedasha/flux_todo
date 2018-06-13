import AppView from '../views/AppView'
import {mount, shallow} from 'enzyme'
import React from 'react'
import {Header, Main, Footer} from '../views/AppView'
import Immutable from 'immutable'

describe('AppView', () => {
  it('AppView', () => {
    const wrapper = shallow(< AppView/>)
    expect(wrapper.contains(
      <div>
        <Header />
        <Main />
      </div>
    )).toBe(true)
  })
  it('Header', () => {
    const props = {
      onCreateTodo: jest.fn(),
    }
    const wrapper = mount(<Header {...props}/>)
    wrapper.find('input').node.value = 'test'
    wrapper.find('form').simulate('submit')
    expect(props.onCreateTodo.mock.calls).toEqual([['test']])
  })

  it('Main', () => {
    const store = Immutable.Map({todos:{
      text:'test',
      id:123,
      status:false
    }})
    const props = {
      todos: store,
      onDeleteTodo: jest.fn(),
        onGetTodos: jest.fn(),
    }
    const wrapper = mount(<Main {...props}/>)
    wrapper.find('#btn').simulate('click')
    expect(props.onDeleteTodo.mock.calls.length).toEqual(1)

      wrapper.find('#btn1').simulate('click')
      expect(props.onGetTodos.mock.calls.length).toEqual(1)
  })

})
