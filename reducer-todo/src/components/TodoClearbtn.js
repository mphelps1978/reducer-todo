import React from 'react';

import './buttonStyle.css'

export default function TodoClear(props) {
  return (
    <div style={{textAlign: 'center'}} >
    <button className="myButton"
      onClick={() => props.dispatch({ type: 'CLEAR_COMPLETED' })}>
      Clear completed
    </button>
    </div>
  );
}