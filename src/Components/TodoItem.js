import React from 'react'

export default function TodoItem({todoList,onDelete}) {
  return (
    <div className='container'>
      <h4>{todoList.title}</h4>
      <p className='mx-2'>{todoList.desc}</p>
      <button className="btn btn-danger" onClick={()=>{onDelete(todoList)}}>Remove</button>
    </div>
  )
}
