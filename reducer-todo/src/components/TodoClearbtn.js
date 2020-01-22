import React from 'react';

export default function TodoClear(props) {
  return (
    <div style={{textAlign:'center'}}>
    <button
      onClick={() => props.dispatch({ type: 'CLEAR_COMPLETED' })}>
      Clear completed
    </button>
    </div>
  );
}