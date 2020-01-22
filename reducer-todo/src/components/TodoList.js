// Dependencies
import React, { useReducer } from "react";
// Components
import TodoItem from './TodoItem';

import {initialState, todoReducer} from '../reducers/todoReducer';

import './buttonStyle.css'


const TodoList = (props) =>  {
  console.log('Props: ', props)
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      {props.state.map(item => (
        <div onClick={() => dispatch({type: 'TOGGLE_COMPLETED'})} >
          <TodoItem key={item.id} item={item} dispatch={props.dispatch} />
        </div>
      ))}
      </div>

  );
}
export default TodoList


