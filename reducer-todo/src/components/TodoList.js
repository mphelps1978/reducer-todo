// Dependencies
import React, { useReducer } from "react";
// Components
import TodoItem from './TodoItem';

import {initialState, todoReducer} from '../reducers/todoReducer';


const TodoList = (props) =>  {
  console.log('Props: ', props)
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div onClick={() => dispatch({type: 'TOGGLE_COMPLETED'})} >
      {props.state.map(item => (
        <TodoItem key={item.id} item={item} dispatch={props.dispatch} />
      ))}
    </div>
  );
}
export default TodoList


