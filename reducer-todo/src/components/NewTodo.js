import React, {useState} from "react";



const NewTodo = function (props) {
  const [todo, setTodo] = useState ('');



  return (
    <div style={{textAlign:'center'}}>
      <input
        type='text'
        value={todo}
        placeholder='Enter new Todo Item'
        onChange={e => setTodo(e.target.value)}/>
      <button style={{marginLeft: '20px'}} onClick={() => {
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