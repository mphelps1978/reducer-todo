import React, {useState} from "react";

import './buttonStyle.css';



const NewTodo = function (props) {
  const [todo, setTodo] = useState ('');




  return (
    <div style={{textAlign:'center'}}>
      <input
      style={{
        color: 'white',
        background: 'transparent',
	      border: 'none',
	      borderBbottom: '1px dashed #83A4C5',
	      width: '275px',
      	outline: 'none',
	      padding: '0px 0px 0px 0px',
	      fontStyle: 'italic'
      }}
        type='text'
        value={todo}
        placeholder='Enter new Todo Item'
        onChange={e => setTodo(e.target.value)}/>
      <button className='myButton' onClick={() => {
          props.dispatch({
            type: 'TOGGLE_ADD',
            payload: {todo: todo}
          });
          setTodo('');
      }}>
      Add new Item
      </button>
    </div>

  );
}

export default NewTodo