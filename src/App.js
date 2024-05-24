import { useEffect, useState } from 'react';
import './App.css';
import Headers from './Components/Headers';
import Todos from './Components/Todos';
import AddTodos from './Components/AddTodos';

function App() {
  // let initTodo;
  // if(localStorage.getItem("todo")===null){
  //   initTodo=[]
  //   console.log("localstorage is empty")
  // }
  // else{
  //   initTodo=JSON.parse(localStorage.getItem("todo"))
  // }
  
  const onDelete = (todoList) => {
    // console.log("delete btn triggered",todoList)
    setTodo(todo.filter((e) => {
      return e !== todoList
    }))
    localStorage.setItem("todo",todo)
  }
  const addTodos = (Title,Desc) => {
    let sno
    if(todo.length===0){
      sno=0;
    }
    else{
      sno=todo[todo.length-1].sno+1
    }
    let mytodo = {
      sno:sno,
      title: Title,
      desc: Desc
    }
    setTodo([...todo,mytodo])
    localStorage.setItem("todo",JSON.stringify(mytodo))
  }
  const [todo, setTodo] = useState([])
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todo))
  },[todo])
  return (
    <>
      <Headers title="MyTodoList" searchbar={false} />
      <AddTodos addTodo={addTodos} />
      <Todos todoitem={todo} onDelete={onDelete} />
    </>
  );
}

export default App;
