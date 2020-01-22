import React from "react";


const TodoItem = (props) => {
  console.log ('Props in TodoItem: ', props);

  return (
    <div style={{
      margin: "60px"

    }}>
    <h2
        style={{
          color: 'white',
          cursor: 'pointer',
          textDecoration: `${props.item.completed ? 'line-through' : 'none'}`,
          opacity: `${props.item.completed ? '0.2' : '1'}`,


        }}
        onClick={() =>
          props.dispatch({ type: 'TOGGLE_COMPLETED', payload: props.item.id })
        }>
        {!props.item.completed && (
          <span
            style={{
              background: 'blue',
              border: '2px solid black',
              height: '12px',
              width: '12px',
              border: '2px solid white',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '2%',
            }}></span>
        )}
        {props.item.completed && (
          <span
            style={{
              height: '12px',
              width: '12px',
              border: '2px solid white',
              backgroundColor: 'white',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '2%',
            }}></span>
            )}
        {props.item.item}
      </h2>


    </div>

  );
}

export default TodoItem;