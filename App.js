import { useState } from 'react';
import './App.css';
import AddToDos from './components/AddToDos';
import Todo from './components/Todo';


function App() {
  const [todos, setTodos] = useState([{text: 'Create it! Do it! Delete it!', isDone: false}]);


//to add some toDo//

const addTodo = (text) => {
  const NewToDos = [...todos]
  NewToDos.push({text});
setTodos(NewToDos);

};
//to complete toDo task//

const completeTodo = (index) => {
  const newTodos = [...todos];
  newTodos[index].isDone = true;
  setTodos(newTodos);
      };

//to remove completed toDo//

const removeTodo = (index) => {
  const NewToDos = [...todos]
  NewToDos.splice(index, 1) 
  setTodos(NewToDos);
 
 }

 
  
  return (
    <div className="App">
      <div className="todo-list">
      <h1 className='header'>My ToDo List</h1>
     <div className="toDoContainer">
     <AddToDos addTodo={addTodo}/>
       {todos.map((todo, index) =>( 
      <Todo key={index} 
      index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
       ))}
      <div className="addToDoContainer"/>
    
</div>
     </div>
    </div>
  );
}

export default App;
