import React from "react";
import './Todo.css';

const ToDo = ({ todo, index, completeTodo, removeTodo }) => {
    return ( 
<div className="todo" style={{textDecoration: todo.isDone ? "line-through" : "" }}>

{todo.text}

<div className="button-container">
<button type="button" className="btn-delete" 
onClick={()=> completeTodo(index)}>Done</button>
<button type="button1" className="btn-done"
onClick={()=> removeTodo(index)}>Delete</button>

</div>

</div>
    
    );
  
    
}
 
export default ToDo;


