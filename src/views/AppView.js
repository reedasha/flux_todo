import React from 'react';


function AppView(props) {
  return (
    <div>
      <Header {...props} />
      <Main   {...props} />
    </div>
  );
}

export function Header(props) {
  let input
  return (
    <header id="header">
      <h1>To Do list</h1>
      <form onSubmit={function(e){
          e.preventDefault()
          props.onCreateTodo(input.value)
           input.value = ''
        }}>
        <input
          ref={node => {
            input = node
          }}
        />
          <button type="submit"> Add Todo </button>
      </form>
    </header>
  );
}

export function Main(props) {
  return (
    <section id="main">
      <ul id="todos">
        {props.todos.valueSeq().reverse().map(todo => {
          return (
            <li key={todo.id}>
                <span>{todo.text}</span>
              <button id="btn" onClick={function(e){
                  e.preventDefault()
                  props.onDeleteTodo(todo.id)
                }}>
                delete
              </button>
            </li>
          )
        })
      }
      </ul>

        <button id="btn1" onClick={function(e){
            e.preventDefault()
            props.onGetTodos()
        }}>
            Get todos from API
        </button>

    </section>
  );
}

export default AppView;
