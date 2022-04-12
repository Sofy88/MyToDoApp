import { useState } from 'react';
import './AddToDos.css';


function AddToDos({ addTodo }) {
    const [value, setValue] = useState('');
    const toDoHandler = (event) => {
event.preventDefault();
if(!value) return;
addTodo(value);
setValue('')
}
    return ( 
    
        <form onSubmit={toDoHandler}>
        <input className="input" value={value} onChange={event=>setValue(event.target.value)} type='text' placeholder='create your toDo here...'/> 
            </form>
     );
       
}

export default AddToDos;