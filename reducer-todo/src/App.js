import React, {useState, useReducer} from 'react';

import {initialState, todoReducer} from './reducers/todoReducer';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import TodoClearbtn from './components/TodoClearbtn';

function App() {
const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div style={{
      background: '#282c34',
      paddingBottom:'50px'

    }}>

      <header className="App-header">
        <h1 style={{color:'white', textAlign:'center'}}>
          Welcome to My ToDo List
        </h1>
      </header>
      <div>
      <NewTodo state={state} dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
      <TodoClearbtn dispatch={dispatch} />
      </div>

    </div>
  );
}

export default App;
