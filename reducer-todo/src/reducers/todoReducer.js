import {useState, useReducer} from 'react';

export const initialState = [
 {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
 },
 {
   item: 'Have a good cry after this assignment',
   completed: false,
   id: 983457803458
 },
 {
   item: 'never give up on this assignment',
   completed: false,
   id: 390345
 },

];

export const todoReducer = (state, action) => {
  switch(action.type){

    case 'TOGGLE_COMPLETED':
      return state.map(item => {
        return item.id === action.payload
        ? {...state, completed: !state.completed}
        : item
      })

    case 'TOGGLE_ADD':
      return [
        ...state,
        {
          item: action.payload.todo,
          completed: false,
          id: Date.now()

        },
      ];
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);

    default:
      return state;
  }
}