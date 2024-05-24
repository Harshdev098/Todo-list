import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className='container'>
      <h2 className='text-center my-2'>Your Todos</h2>
      {/* <div>{props.todoitem[0].id}</div> */}
      {props.todoitem.length!==0 ? props.todoitem.map((todo)=>{
        return <TodoItem todoList={todo} key={todo.id} onDelete={props.onDelete}/>
      }) : "No Todos Found"}
    </div>
  )
}
