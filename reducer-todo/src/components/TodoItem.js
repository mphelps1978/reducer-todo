import React from "react";


const TodoItem = (props) => {
  console.log ('Props in TodoItem: ', props);

  return (
    <div style={{
      margin: "60px"

    }}>
    <h2
        style={{
          cursor: 'pointer',
          color: `${props.item.completed ? 'black' : 'white'}`,
          opacity: `${props.item.completed ? '0' : '.5'}`,
          textDecoration: `${props.item.completed ? 'line-through' : 'none'}`,
          background: `${props.item.completed ? 'lightblue' : 'blue'}`,
        }}
        onClick={() =>
          props.dispatch({ type: 'TOGGLE_COMPLETED', payload: props.item.id })
        }>
        {!props.item.completed && (
          <span
            style={{
              background: 'white',
              border: '2px solid black',
              height: '12px',
              width: '12px',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '2%',
            }}></span>
        )}
        {props.item.completed && (
          <span
            style={{
              background: 'black',
              textDecoration: 'line-through',
              height: '12px',
              width: '12px',
              border: '2px solid white',
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